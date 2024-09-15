# Index
Simple to-do list app made with the MEVN stack.

# Usage
You can use this to-do list app for managing your coding projects, managing work life, or even just your schedule. Due to the simplicity and light-weight the backend has, it makes this app able to be hosted on even the slowest of computers.

# Installation
> ### Make sure you have Node.JS and NPM installed!
## Backend
First open the backend folder, then rename the ```.env-example``` file to ```.env```

Then go to [Mongodb](https://www.mongodb.com/docs/atlas/getting-started/) and create a new cluster, take the connection string and replace the XXXXXX in the ```.env``` file to the connection string.

After this run the following commands to start the backend:
```sh
npm i
npm start
```

This will open the backend at port 8080 (http://localhost:8080)

## Frontend
First open the backend folder, then run the following commands in your terminal to start the frontend:
```sh
npm i
npm run dev
```

If you want to build the frontend into just plain html and js files run this command:
```sh
npm run build
```
This will create a ```dist/``` folder, you can now host this with any tool you want, here is the python way:
```sh
python -m http.server # If this doesn't work change python to python3 and rerun the command
```