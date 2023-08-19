import './upload.css';
import axios from 'axios';
import { h, Component } from 'preact';

class FileUpload extends Component {
    state = {
        files: [],
        fileNames: [],
        s3URLs: [],
        isLoading: false,
        isSubmitted: false,
        errorMessage: '',
    };

    idUpload = Math.random().toString(36).substring(2);

    fileSet = new Set();

    getPresignedURL = async (file, index) => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.props.s3presignedurl}?object=${this.props.filePath}/${this.state.fileNames[index]}&method=PUT&bucket=${this.props.bucketName}`,
            headers: { 
                'Authorization': this.props.authToken,
            }
        };
        const response = await axios.request(config);
        return response.data;
    }

    uploadFileToS3 = async (file, presignedURL) => {
        let data = new FormData();
        data.append('file', file);
        
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: presignedURL,
            headers: {
                'Content-Type': file.type, 
                'Authorization': this.props.authToken,
            },
            data : file
        };
        console.log(file,presignedURL);
        await axios.request(config);
    }

    onFilesChange = (event) => {
        if (this.state.isSubmitted) return;

        const { files } = event.target;
        const newFiles = Array.from(files).filter(file => {
            const uniqueId = `${file.name}-${file.size}`;
            if (!this.fileSet.has(uniqueId)) {
                this.fileSet.add(uniqueId);
                return true;
            }
            return false;
        });

        if (!this.props.multiple && newFiles.length) {
            newFiles.splice(1);
            this.fileSet.clear();
            this.fileSet.add(`${newFiles[0].name}-${newFiles[0].size}`);
        }

        this.setState((prevState) => ({
            files: this.props.multiple ? [...prevState.files, ...newFiles] : newFiles,
            fileNames: this.props.multiple ? [...prevState.fileNames, ...newFiles.map(file => "")] : newFiles.map(file => ""),
        }));
        event.target.value = '';
    };

    onFileNameChange = (event, index) => {
        const { value } = event.target;
        this.setState(prevState => {
            const fileNames = [...prevState.fileNames];
            fileNames[index] = value;
            return { fileNames };
        });
    };

    onSubmit = async () => {
        if (this.state.fileNames.some(name => name.trim() === "")) {
            this.setState({ errorMessage: "All Test Names are required!" });
            return; // Prevents further submission.
        } else {
            this.setState({ errorMessage: '' }); // Clears previous error messages.
        }
        this.setState({ isLoading: true });
        
        const s3URLs = [];

        const uploadPromises = this.state.files.map(async (file, index) => {
            if (this.props.s3presignedurl) {
                const presignedURL = await this.getPresignedURL(file, index);
                await this.uploadFileToS3(file, presignedURL);
                
                const s3URL = `s3://${this.props.bucketName}/${this.props.filePath}/${file.name}`;
                s3URLs.push(s3URL);
            }
        });

        try {
            await Promise.all(uploadPromises);
            this.setState({ isSubmitted: true, s3URLs });

            if (this.props.onSubmit) {
                this.props.onSubmit(this.state.files, this.state.fileNames);
            }
        } catch (error) {
            console.error("Error uploading files:", error);
        } finally {
            this.setState({ isLoading: false });
        }
    };

    onDelete = (index) => {
        const files = [...this.state.files];
        const fileNames = [...this.state.fileNames];
        files.splice(index, 1);
        fileNames.splice(index, 1);
        this.setState({ files, fileNames });
    };

    onDeleteAll = () => {
        this.setState({ files: [], fileNames: [], s3URLs: [] });
    };

    onDragOver = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
    }

    onDragLeave = (e) => {
        e.currentTarget.classList.remove('drag-over');
    }

    onDrop = (e) => {
        e.preventDefault();
        e.currentTarget.classList.remove('drag-over');
        this.onFilesChange(e);
    }

    renderFileItem = (file, index) => {
        const fileName = this.state.fileNames[index];
        const path = `${this.props.path}any_event:${index}/test_name`;
        return (
            <div className="file-item" key={index}>
                <img src={URL.createObjectURL(file)} alt={file.name} />
                <label>Enter Test Name:</label>
                <input 
                    type="text" 
                    value={fileName}
                    onChange={(event) => this.onFileNameChange(event, index)}
                    disabled={this.state.isSubmitted}
                />
                <mb-input path={path} hidden data={this.state.s3URLs[index]?this.state.s3URLs[index]:fileName}></mb-input>
                {/* <mb-input path={path} label="Test name" value={this.state.s3URLs[index]}></mb-input> */}
                {!this.state.isSubmitted && <button class="hover:bg-red-500 hover:text-white text-red-500" onClick={() => this.onDelete(index)}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" fill="currentColor"></path> </svg></button>}
            </div>
        );
    };

    

    render(_, { files, isLoading, isSubmitted, errorMessage }) {
        return (
            <div id={this.idUpload} className="file-upload">
                {!isSubmitted && (
                    <div className="drag-drop-zone"
                    onDragOver={this.onDragOver}
                        onDragLeave={this.onDragLeave}
                        onDrop={this.onDrop}
                        >
                        {/* onDrop={this.onFilesChange} */}
                        <input 
                            type="file" 
                            onChange={this.onFilesChange}
                            {...(this.props.multiple && { multiple: true })} 
                        />
                        Drag & Drop or Click to Upload Files
                    </div>
                )}
                {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}
                <div className="file-list">{files.map(this.renderFileItem)}</div>
                {!isSubmitted && (
                    <div className="actions">
                        <button class={isLoading?"hidden":"hover:text-green-500 hover:bg-white"} onClick={this.onSubmit}>{isLoading ? "Loading..." : "Submit"}</button>
                        {!isLoading && <button class={"hover:text-red-500 hover:bg-white"} onClick={this.onDeleteAll}>Delete All</button>}
                    </div>
                )}
            </div>
        );
    }
}

export default FileUpload;
