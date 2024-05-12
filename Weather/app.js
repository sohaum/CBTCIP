const API_KEY = 'beb1556521276e86d44a81f91de5a0b1';
const weatherInfo = document.getElementById('weather-info');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
    const locationInput = document.getElementById('location-input');
    const location = locationInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const { main, wind } = data;
            weatherInfo.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${main.temp}°C</p>
                <p>Humidity: ${main.humidity}%</p>
                <p>Wind Speed: ${wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.textContent = 'Failed to fetch weather data. Please try again.';
        });
});
