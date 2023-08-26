import { Component } from 'preact';
import './FileUpload.css'
import axios from 'axios';
import { useId } from 'preact/hooks';

type FileUploadProps = {
    onFilesSelected?: (files: FileData[]) => void;
    onFilesUploaded?: (files: FileData[]) => void;
    multiple?: boolean;
    acceptedFileTypes?: string; 
    s3serviceurl: any;
    filePath: string;
    bucketName: string;
    authToken: any;
    path: string;
};

type FileData = {
    path: string;
    bucketName: string;
    name: string;
    type: string;
    url?: string;
};

type FileUploadState = {
    files: FileData[];
    uploadFiles: File[];
    dragOver: boolean;
    isUploaded: boolean;
};

class FileUpload extends Component<FileUploadProps, FileUploadState> {
    constructor(props: FileUploadProps) {
        super(props);
        this.state = {
            files: [],
            uploadFiles: [],
            dragOver: false,
            isUploaded: false
        };
    }

    onFilesChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        if (input.files) {
            const filesArray = Array.from(input.files).map(file => ({ name: file.name, path: `${this.props.filePath}/${file.name}`, bucketName: this.props.bucketName, type: file.type }));
            const uploadfilesArray = Array.from(input.files)
            this.setState({ files: filesArray });
            console.log(uploadfilesArray);
            this.setState({ uploadFiles: uploadfilesArray });
            if (this.props.onFilesSelected) {
                // this.props.onFilesSelected(filesArray);
            }
        }
        input.value = '';
    }

    handleUploadClick = async () => {
        let files = this.state.files;
        if(files.length == 0) return;
        console.log('Upload clicked');
        await Promise.all(files.map(async (file: FileData, index) => {
            const presignedURL = await this.getPresignedURL(file,'PUT');
            await this.uploadFileToS3(this.state.uploadFiles[index],presignedURL);
        }));
        this.setState({ isUploaded: true });
        await Promise.all(files.map(async (file: FileData) => {
            const presignedURL = await this.getPresignedURL(file);
            file.url = presignedURL;
        }));
        this.setState({ files: files });
        if (this.props.onFilesSelected) {
            this.props.onFilesSelected(files);
        }
        if (this.props.onFilesUploaded) {
            this.props.onFilesUploaded(files);
        }
    }

    onDragOver = (event: DragEvent) => {
        event.preventDefault();
        this.setState({ dragOver: true });
    }

    onDragLeave = () => {
        this.setState({ dragOver: false });
    }

    onDrop = (event: DragEvent) => {
        event.preventDefault();
        this.setState({ dragOver: false });
    
        if (event.dataTransfer && event.dataTransfer.files) {
            const filesArray = Array.from(event.dataTransfer.files).map(file => ({ name: file.name, path: `${this.props.filePath}/${file.name}`, bucketName: this.props.bucketName, type: file.type }));
            const uplaodfilesArray = Array.from(event.dataTransfer.files);
            this.setState({ files: filesArray });
            this.setState({ uploadFiles: uplaodfilesArray });
            // if (this.props.onFilesSelected) {
            //     this.props.onFilesSelected(filesArray);
            // }

        }
    }

    uploadFileToS3 = async (file:File, presignedURL:string) => {
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

    getPresignedURL = async (file:FileData,method='GET') => {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${this.props.s3serviceurl}?object=${file.path}&method=${method}&bucket=${file.bucketName}`,
            headers: { 
                'Authorization': this.props.authToken,
            }
        };
        const response = await axios.request(config);
        return response.data;
    }

    compare_files = (files1: FileData[], files2: FileData[]) => {
        if(files1.length !== files2.length) return false;
        for(let i = 0; i < files1.length; i++){
            if(files1[i].path !== files2[i].path) return false;
        }
        return true;
    }

    handleMbInput = async (e: Event) => {
        // @ts-ignore comment
        let data = e.currentTarget?.data;
        if(data){
            const parsedData = JSON.parse(data);
            if(this.compare_files(parsedData,this.state.files)) return;
            else if (parsedData.length == 0) return;
            let files = parsedData.map((item: FileData) => ({
                path: item.path,
                bucketName: item.bucketName,
                name: item.name,
                type: item.type
            }));
            // Use Promise.all to ensure all async operations are completed before moving forward
            await Promise.all(files.map(async (file: FileData) => {
                const presignedURL = await this.getPresignedURL(file);
                file.url = presignedURL;
            }));

            this.setState({ files: files, isUploaded: true });
            if (this.props.onFilesSelected) {
                this.props.onFilesSelected(files);
            }
        }
    }

    _handleinput = (e:Event, index:number) => {
        let files = this.state.files;
        const target = e.target as HTMLInputElement;
        if(!files[index]) return;
        if(!target.value) return;
        files[index].name = target.value;
        this.setState({files: files});
        
    }

    render() {
        const _FileUploadID = useId();
        return (
            <div key={_FileUploadID} className="file-upload">
                <mb-text-select hidden data={JSON.stringify(this.state.files.map((item: FileData) => ({path: item.path,bucketName: item.bucketName,name: item.name,type: item.type})))}  onmb-input={this.handleMbInput} path={`${this.props.path}`} label="Test name" terminology="local_terms"/>
                {!this.state.isUploaded && (
                    <div
                        className={`drag-drop-zone ${this.state.dragOver ? 'drag-over' : ''}`}
                        onDragOver={this.onDragOver}
                        onDragLeave={this.onDragLeave}
                        onDrop={this.onDrop}
                    >
                        <input
                            type="file"
                            multiple={this.props.multiple}
                            accept={this.props.acceptedFileTypes || "*.*"}
                            onChange={this.onFilesChange}
                        />
                            {/* onClick={this.onInputClick} */}
                        Drag & Drop files here or click to select
                    </div>
                )}

                <div className="file-list">
                    {this.state.files.map((file, index) => (
                        <div key={index} className="file-item">
                            {file.name}
                            {file.url && (
                                <a href={file.url} target={"_blank"} rel="noopener noreferrer">
                                    {file.type.includes('image')?(<img src={file.url} alt={file.name} />):(<p>Click Here</p>)}
                                </a>
                            )}
                            {!this.state.isUploaded && (
                                <div class="test_input">
                                    <p>Test Name</p>
                                    <input onInput={(e:Event)=>this._handleinput(e,index)} type="text" label="test name" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {!this.state.isUploaded && (
                    <div className="actions">
                        <button onClick={() => this.setState({ files: [] })}>
                            Clear Files
                        </button>
                        <button onClick={this.handleUploadClick}>
                            Upload
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default FileUpload;
