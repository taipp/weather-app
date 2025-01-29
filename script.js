const apiKey = "eaca39fc2a1a2f4d2579b34ac44cae12";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Berlin";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.getElementById("city-name").innerHTML = data.name;
}

checkWeather();

