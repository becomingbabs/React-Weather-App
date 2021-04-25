/** @format */

import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
        setWeather({
          ready: true,
          city: response.data.name,
          country: response.data.sys.country,
          date: new Date(response.data.dt * 1000),
          temperature: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          icon: response.data.weather[0].icon,
        });
        setCity("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "6b9121d0e9ab077da17915a7fafe6157";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
  }


if (weather.ready) {
  return (
    <div id="weather">
      <div className="row top-row">
        <div className="col form">
          <form onSubmit={handleSubmit}>
            <input
              id="search-box"
              type="text"
              placeholder="Type City Here"
              autoComplete="off"
              onChange={handleChange}
              value={city}
            />
            <br />
            <button
              className="button"
              id="search-button"
              type="submit"
              value="Search"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col img">
          <img src="https://i.gifer.com/Iu3.gif" alt="girl in rain" />
        </div>
        <div className="col quote">
          "There's no such thing as bad weather, <br />
          only inappropriate clothing."
          <br />- Sir Ranulph Fiennes
        </div>
      </div>

      <hr />
        <Weatherinfo data={weather} />
      <hr />
        <WeatherForecast city={weather.city}/>
    </div>
  );
} else {
  search();
  return ("Please enter a city."); 
}
  
}
