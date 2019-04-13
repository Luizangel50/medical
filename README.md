# Medical App

## Dependecies

* Node.js, including npm: https://nodejs.org/en/download/ (LTS is recommended)
* yarn: https://yarnpkg.com/lang/en/docs/install

## Usage

Install npm package [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server and client dependencies

```
yarn
cd client
yarn
```

If you want to run project as debug/dev, to start the server and client at the same time (from the root of the project)

```
yarn dev
```

## Running the production build on localhost.
This will create a production build, then Node will serve the app on http://localhost:5000

```
NODE_ENV=production yarn dev:server
```