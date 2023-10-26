# tip2toe

## Technologies Used

Frontend - Node Js - Preact
NOTE: PLEASE USE NODE VERSION == 19.7.0

Backend - OpenEHR


## How To Get Started 

1. Install Docker from the link given below
```
https://docs.docker.com/engine/install/
```

2. Clone the repository and Navigate to it

3. Install Node Modules
```
npm install
```

4. Start docker container
```
docker-compose up
```

5. Run the app Locally
```
npm run dev
```

6. Post the ehr template

If Linux / mac
```
chmod +x loadTemplate.sh
./loadTemplate.sh
```

If Windows
```
./loadTemplate.bat
```

7. Open the App Url
```
http://localhost:5173
```

8. To use local ehr system change the env variable
```
VITE_IS_DEV = true
```


## Deployment Steps

1. Deploy OpenEHR using docker
```
https://docs.docker.com/engine/install/

Clone the repository or the just the docker-compose.yaml file

docker-compose up
```

2. Build the Frontend App
```
npm build
```

3. Deploy the files from the dist folder to a frontend server accessible to public



## Code Docs
Comments has been added for each File to explain its function as well as use. 




## Summary 
The following app is developed utilizing Preact for the frontend and openEHR as the backend foundation to store the tip2toe form data in a structured data format. The app also has a SMART ON FHIR authentication integration for easy portability to any FHIR system.
