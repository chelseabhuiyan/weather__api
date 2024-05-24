# Weather App

This web application allows users to check if it will rain and if there will be a sunset in a specified city on a given date.

## Prerequisites

To begin, I opened the terminal and created a new directory for my weather app using mkdir weather_app, then navigated into it with cd weather_app. I initialized a new Node.js project by running npm init -y. After that, I installed the required dependencies using npm install express axios ejs.

Next, I organized the directory structure. There was already a node_modules, and package.json inside. I created a public folder and within that public folder, I created a css folder and added a styles.css file. In the main directory, I established a views folder for storing EJS templates. Inside views, I created an index.ejs file.

To ensure that unnecessary files are not included in version control, I created a .gitignore file and added node_modules to it.

Additionally, I installed nodemon globally using npm install -g nodemon for automatic server restarts during development. I confirmed that the app was running by doing nodemon app.js in the terminal. After verifying its functionality, I closed the terminal and restarted the server using node app.js. The server started on port 3000, and I checked how it looked in Chrome by going to http://localhost:3000. I refreshed the page each time I made edits to observe the changes.

## How to Use

1. Open your web browser and go to `http://localhost:3000`.
2. Enter the name of the city and select the date you want to check for weather information.
3. Click the "Check" button.
4. The application will display whether it will rain or if there will be a sunset in the specified city on the selected date.

## Files Explanation

- `index.js`: Main server file containing the Express application logic.
- `index.ejs`: HTML template file for rendering the weather application interface.
- `styles.css`: CSS file for styling the weather application interface.
- `README.md`: Instructions and explanation for running the application and usage.


