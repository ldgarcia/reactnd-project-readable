# Readable App
This app was made as a project for Udacity's ND019. The app is a [client](/frontend), made with React and Redux, for a [server](/api-server) provided by Udacity.

More information:
* [Project overview](https://classroom.udacity.com/nanodegrees/nd019/parts/7b1b9b53-cd0c-49c9-ae6d-7d03d020d672/modules/66bc9ba3-7fda-4d49-b032-d885da838499/lessons/7367dda1-ee03-4032-8f2d-16e238ce7c04/concepts/701c627c-d73a-4b31-bd58-024ada7669e2)
* [Rubric](https://review.udacity.com/#!/rubrics/1017/view)

## Installing and running the app

1. Clone the repo
````bash
$ git clone https://github.com/ldgarcia/reactnd-project-readable
$ cd reactnd-project-readable
````

2. Install and start the API server:
````bash
$ cd api-server
$ npm install
$ node server
````
By default, the server runs on port `http://localhost:3001/`. You can change this by setting the `SERVER_ORIGIN` and `SERVER_PORT` environment variables.

3. In another terminal window, install and start the frontend:
````bash
$ cd frontend
$ npm install
$ npm start
````
Likewise, by default, the client sets the server address at `http://localhost:3001/`. You can change this by setting the environment variables `REACT_APP_SERVER_ORIGIN` and `REACT_APP_SERVER_PORT`.

## License
* [`reddit-clone-server`](/api-server): ISC
* [`reactnd-project-readable-client`](/frontend): MIT License
