document.getElementById('search-btn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'db99e1a221fc4fb2b0f75543240912'; // Replace with your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=db99e1a221fc4fb2b0f75543240912&q=${city}&aqi=no`;

    const errorMessage = document.getElementById('error-message');
    const weatherDetails = document.getElementById('weather-details');

    // Clear previous results
    errorMessage.textContent = '';
    weatherDetails.style.display = 'none';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found or invalid API request');
        }
        const data = await response.json();

        // Extract weather details from the API response
        const location = `${data.location.name}, ${data.location.country}`;
        const temperature = data.current.temp_c;
        const weather = data.current.condition.text;
        const humidity = data.current.humidity;
        const windSpeed = data.current.wind_kph;

        // Update the UI with the weather data
        document.getElementById('location').textContent = location;
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('weather').textContent = weather;
        document.getElementById('humidity').textContent = humidity;
        document.getElementById('wind').textContent = windSpeed;

        // Show the weather details section
        weatherDetails.style.display = 'block';
    } catch (error) {
        errorMessage.textContent = error.message;  // Display error message
    }
}
