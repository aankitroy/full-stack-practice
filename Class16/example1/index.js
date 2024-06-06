const temperatureRef = document.getElementById('temperature');
const locationRef = document.getElementById('location');
const descriptionRef = document.getElementById('description');
const weatherIconRef = document.getElementById('weather-icon');
const buttonRef = document.getElementById('submit-button');

buttonRef.addEventListener('click', async (event) => {
    console.log('Button clicked');
    event.preventDefault();
    const city = document.getElementById('location-input').value;
    console.log('city:', city);
    const weatherData = await getWeather(city);
    if (weatherData) {
        temperatureRef.textContent = weatherData.current.temp_c;
        locationRef.innerHTML = weatherData.location.name;
        descriptionRef.textContent = weatherData.current.condition.text;
        weatherIconRef.src = weatherData.current.condition.icon;
    }
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=41ccd2ac9ced426cbf921934240905&q=${city}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}