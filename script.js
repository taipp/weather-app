const apiKey = "eaca39fc2a1a2f4d2579b34ac44cae12";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    // document.getElementById("city-name").innerHTML = data.name;

    return data;
}

function updateWeatherIcon(data) {
    const iconElem = document.getElementById("weather-icon");
    const weatherCode = data.weather[0].main;

    if (weatherCode.toLowerCase() === "clear sky") {
        iconElem.src = "imgOpenWeather/clear-sky.png";
    }

    else if (weatherCode.toLowerCase() === "few clouds") {
        iconElem.src = "imgOpenWeather/few-clouds.png";
    }

    else if (weatherCode.toLowerCase() === "scattered clouds" || weatherCode.toLowerCase() === "clouds") {
        iconElem.src = "imgOpenWeather/scattered-clouds.png";
    }

    else if (weatherCode.toLowerCase() === "broken clouds") {
        iconElem.src = "imgOpenWeather/broken-clouds.png";
    }

    else if (weatherCode.toLowerCase() === "shower rain") {
        iconElem.src = "imgOpenWeather/shower-rain.png";
    }

    else if (weatherCode.toLowerCase() === "rain") {
        iconElem.src = "imgOpenWeather/rain.png";
    }

    else if (weatherCode.toLowerCase() === "thunderstorm") {
        iconElem.src = "imgOpenWeather/thunderstorm.png";
    }

    else if (weatherCode.toLowerCase() === "snow") {
        iconElem.src = "imgOpenWeather/snow.png";
    }

    else if (weatherCode.toLowerCase() === "mist") {
        iconElem.src = "imgOpenWeather/mist.png";
    }

    else {
        iconElem.src = "imgOpenWeather/clear-sky.png";
    }

}

function updateWeatherData(data){
    updateWeatherIcon(data);

    document.getElementById("temperature-info").innerHTML = data.main.temp.toFixed(1) + "\u00B0c";
    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("humidity-info").innerHTML = data.main.humidity + "%";
    document.getElementById("wind-info").innerHTML = data.wind.speed + "km/h";

    console.log(data.weather[0].main);

}

function saveCity(city) {
    localStorage.setItem("city", city);
}

function handleCityInput() {
    const cityInput = document.getElementById("input-box");
    const city = cityInput.value;

    console.log(city);

    checkWeather(city)
        .then(data => updateWeatherData(data))
        .catch(error => console.log(`Error fetching data: `, error))
}

function saveData(){
    localStorage.setItem("data", appCard.innerHTML);
}

function showTask(){
    appCard.innerHTML = localStorage.getItem("data");
}

document.getElementById("search-button").addEventListener('click', handleCityInput);

// checkWeather();

