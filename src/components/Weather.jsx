import React, { useState } from "react";
import "./Weather.css";

let API = process.env.React_App_API_KEY;

function Weather() {
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")


  const getData = (event) => {
      if (event.key == "Enter") {
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=imperial`).then(
              response => response.json().then(data => {setWeatherData(data) 
                setCity("")})
          )
      }
  }

  const titleCase = (str) => {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }


  if (typeof weatherData.main === 'undefined') {
      return (
          <div className="App">
              <h2 className = "welcome-header">Search a city to get started.</h2>
              <p className = "welcome-info">This app will use an API to gather weather data on the city you entered.</p>
              <input className = "city-input-default" placeholder="Search city" onChange = {event => setCity(event.target.value)} value = {city} onKeyPress = {getData} />

          </div>
         )
    
  } else {
    return (
        <div className="App">
          <input className = "city-input" placeholder="Search another city" onChange = {event => setCity(event.target.value)} value = {city} onKeyPress = {getData} />
    
          <header className="city-title">
            <h1>{weatherData.name}</h1>
            <p>{titleCase(weatherData.weather[0].description)}</p>

          </header>
          <header className="current-temp">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            />
            <h1>{Math.round(weatherData.main.temp)}°</h1>
          </header>
          <header className = "additional-temp-info">
            <p>Low: {Math.round(weatherData.main.temp_min)}° / High: {Math.round(weatherData.main.temp_max)}°</p>
            <p>Feels like {Math.round(weatherData.main.feels_like)}°</p>
          </header>
          <header className = "additional-weather-info">
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} mph</p>
            <p>There are {weatherData.clouds.all} clouds in the vicinity</p>
          </header>
        </div>
        );
    }
}

export default Weather;


