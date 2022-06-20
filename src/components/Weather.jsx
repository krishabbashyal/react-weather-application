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


  if (typeof weatherData.main === 'undefined') {
      return (
        <input className = "city-input" placeholder="Search another city" onChange = {event => setCity(event.target.value)} value = {city} onKeyPress = {getData} />
      )
    
  } else {
    return (
        <div className="App">
          <input className = "city-input" placeholder="Search another city" onChange = {event => setCity(event.target.value)} value = {city} onKeyPress = {getData} />
    
          <header className="city-title">
            <img src="" alt="" />
            <h1>{weatherData.name}</h1>
            <p>{weatherData.weather.description}</p>
            {console.log(weatherData.weather.description)}
          </header>
          <header className="current-temp">
            <img
              src="http://openweathermap.org/img/wn/03d@2x.png"
              alt="Scattered Clouds"
            />
            <h1>{Math.round(weatherData.main.temp)}°</h1>
          </header>
          <header className = "additional-temp-info">
            <p>Low: 92° / High: 95°</p>
            <p>Feels like 105°F</p>
          </header>
          <header className = "additional-weather-info">
            <p>Humidity: 50%</p>
            <p>Wind Speed: 11MPH</p>
            <p>There are 0 clouds in the vicinity</p>
          </header>
        </div>
        );
    }
}

export default Weather;


