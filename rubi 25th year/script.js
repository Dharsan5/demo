document.getElementById('weather-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'e0d7076dec2cd36a728d92ea2065d87a'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Corrected URL

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
            document.getElementById('weather-result').innerHTML = `
                <h4>Weather in ${data.name}</h4>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weather-result').innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Error: ${data.message}
                </div>
            `;
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        document.getElementById('weather-result').innerHTML = `
            <div class="alert alert-danger" role="alert">
                Error fetching the weather data.
            </div>`;
    }
});
