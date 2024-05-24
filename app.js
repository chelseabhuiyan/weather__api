const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// WeatherAPI credentials
const API_KEY = '49c275b36240400aa3371516242305';
const BASE_URL = 'http://api.weatherapi.com/v1';

// Default route to render the index page
app.get('/', (req, res) => {
    // Render the index page with initial data
    res.render('index', { willRain: undefined, sunset: undefined, city: undefined, error: undefined });
});

// Route to handle form submission for weather checking
app.post('/weather', async (req, res) => {
    const city = req.body.city;
    const date = req.body.date;
    try {
        // Check if city and date are provided
        if (!city || !date) {
            throw new Error('City and date are required');
        }
        // Make a request to WeatherAPI to get forecast data
        const response = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&dt=${date}`);
        const weatherData = response.data;

        // Check if it will rain based on the forecast data
        const willRain = weatherData.forecast.forecastday[0].day.condition.text.toLowerCase().includes('rain');
        // Check if there will be a sunset based on the forecast data
        const sunset = weatherData.forecast.forecastday[0].astro.sunset !== undefined;

        // Render the index page with weather information
        res.render('index', { willRain: willRain, sunset: sunset, city: city, date: date, error: undefined });
    } catch (error) {
        console.error(error);
        // Render the index page with error message
        res.render('index', { willRain: undefined, sunset: undefined, city: undefined, error: error.message });
    }
});

// Route to handle sunset checking
app.get('/sunset', async (req, res) => {
    const city = req.query.city;
    const date = req.query.date;
    try {
        // Check if city and date are provided
        if (!city || !date) {
            throw new Error('City and date are required');
        }
        // Make a request to WeatherAPI to get forecast data
        const response = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&dt=${date}`);
        const weatherData = response.data;

        // Check if there will be a sunset based on the forecast data
        const sunset = weatherData.forecast.forecastday[0].astro.sunset !== undefined;

        // Render the index page with sunset information
        res.render('index', { sunset: sunset, city: city, date: date, error: undefined });
    } catch (error) {
        console.error(error);
        // Render the index page with error message
        res.render('index', { sunset: undefined, city: undefined, error: error.message });
    }
});

// Define the port for the server to listen on
const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
