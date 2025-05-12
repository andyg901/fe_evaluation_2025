# FE evaluation task

## Project build

In the project directory, you can run:

### `npm start`

It will start application in the development mode, working under port 300. http://localhost:3000 is address under project is accesible once dev server is running

> [!IMPORTANT]
> To be able to request data from server you need to put\
> correct github token in .env under `REACT_APP_GITHUB_TOKEN` variable

### `npm run build`

Builds the app for production to the `build` folder.

## Project testing

I did use cypress testing library for high level application testing. It does test display and search functionality.

I consider it more smoke testing, since it tests crucial parts of the application.

### How to run tests?

First run command `npm run`. Wait until application is running under port 3000. (Keep in mind to provide correct github token in order to have working API).

Next run command `npm test`

## Docker support

To run application with docker. From root folder you can `docker run`

### Additional information

- For UI components I used MaterialUI with Martial Icons and @toolpad/core for notification displaying
