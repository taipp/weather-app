const apiKey = "eaca39fc2a1a2f4d2579b34ac44cae12";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    // document.getElementById("city-name").innerHTML = data.name;

    return data;
}

function updateWeatherData(data){
    document.getElementById("temperature-info").innerHTML = data.main.temp.toFixed(1) + "\u00B0c";
    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("humidity-info").innerHTML = data.main.humidity + "%";
    document.getElementById("wind-info").innerHTML = data.wind.speed + "km/h";

}

function handleCityInput() {
    const cityInput = document.getElementById("input-box");
    const city = cityInput.value;

    console.log(city);

    checkWeather(city)
        .then(data => updateWeatherData(data))
        .catch(error => console.log(`Error fetching data: `, error))
}

document.getElementById("search-button").addEventListener('click', handleCityInput);

// checkWeather();

