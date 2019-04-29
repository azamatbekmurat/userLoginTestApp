This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Recipe Website

### Project to make API calls 04/28/2019

### By Azamat Bekmuratov

## Project Description

    An application makes an API call, retrieves the list of users and at login page checks if entered email and password are correct or not

## Specifications for MVP

1. The user can navigate to the login page
2. The user can check if his email and password are correct
3. If entered email and password matches, app redirects user to user account page

## Setup/Installation Instructions

- Clone repository from Github: https://github.com/azamatbekmurat/userLoginTestApp.git
- Navigate to the cloned directory in a terminal capable of running dotnet commands.
- Download all packages by typing "npm install"
- To run the program type "npm start"

##### In order to open end-point for API calls

- Navigate to the UserLoginService directory, open UserLoginService.sln project on VisualStudio app and run application
- Enable cross-origin resource sharing(CORS) on your browser.

##### OR

- Navigate to the UserLoginService/UserLoginService directorey in a terminal
- Run the command >dotnet add package Microsoft.AspNetCore.StaticFiles -v 1.1.3
- Run the command >dotnet restore
- Run the command >dotnet build
- Run the command >dotnet run
- Enable cross-origin resource sharing(CORS) on your browser.

## Used Technologies:

- JavaScript
- React
- HTML
- CSS
- C#
- ASP .Net Core Web API

## Support and contact details

If you have any questions or suggestions please feel free to email me: azaege@gmail.com

## License

This software is licensed under the MIT license.

Copyright (c) 2019 ** Azamat Bekmuratov **

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
