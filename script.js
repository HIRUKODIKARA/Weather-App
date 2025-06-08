// Mock weather data for 5 cities
const weatherData = {
  "london": { temp: 15, humidity: 70, icon: "🌧️" },
  "tokyo": { temp: 28, humidity: 65, icon: "☀️" },
  "new york": { temp: 22, humidity: 60, icon: "⛅" },
  "paris": { temp: 18, humidity: 75, icon: "🌦️" },
  "delhi": { temp: 35, humidity: 50, icon: "🔥" }
};

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.toLowerCase().trim();
  if (weatherData[city]) {
    displayWeather(city);
  } else {
    alert("City not in database! Try: London, Tokyo, New York, Paris, Delhi.");
  }
});

function displayWeather(city) {
  const data = weatherData[city];
  document.getElementById("city-name").textContent = city.toUpperCase();
  document.getElementById("temperature").textContent = `${data.temp}°C`;
  document.getElementById("humidity").textContent = `Humidity: ${data.humidity}%`;
  document.getElementById("weather-icon").textContent = data.icon;

  // Change background based on weather
  const body = document.body;
  if (data.icon === "☀️") body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
  else if (data.icon === "🌧️") body.style.background = "linear-gradient(135deg, #a1c4fd, #c2e9fb)";
  else if (data.icon === "🔥") body.style.background = "linear-gradient(135deg, #f46b45, #eea849)";
}