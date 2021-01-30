/** @format */

import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({
    city: "Santiago",
    country: "Chile",
    temperature: 23,
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiKey = "6b9121d0e9ab077da17915a7fafe6157";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(function (response) {
        setWeather({
          city: response.data.name,
          country: response.data.sys.country,
          date: new Date(response.data.dt * 1000),
          temperature: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });
      });
    } else {
      alert("Please Enter a City");
    }
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <div id="weather">
      <div className="row top-row">
        <div className="col-5 form">
          <form onSubmit={handleSubmit}>
            <input
              id="search-box"
              type="text"
              placeholder="Type City Here"
              autocomplete="off"
              onChange={handleChange}
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
            <button className="button" id="current-button" type="submit">
              Current Location
            </button>
          </form>
        </div>
        <div className="col-3 img">
          <img src="https://i.gifer.com/Iu3.gif" alt="girl in rain" />
        </div>
        <div className="col-3 quote">
          "There's no such thing as bad weather, <br />
          only inappropriate clothing."
          <br />- Sir Ranulph Fiennes
        </div>
      </div>

      <hr />

      <div className="row current-info-row">
        <div className="col-3 current-city">
          {weather.city}, {weather.country}
          <div className="date-time" id="date">
            <FormattedDate date={weather.date} />
          </div>
          <div className="temp">
            <span className="units active" id="celsius-link">
              {Math.round(weather.temperature) || 23} °C{" "}
            </span>
            <span className="units">|</span>
            <span className="units" id="fahrenheit-link">
              {" "}
              °F
            </span>
          </div>
        </div>
        <div className="col-3 icon-description">
          <div id="description">
            {weather.description || "Sunny"}
            {<br />}
            {weather.icon ? (
              <img src={weather.icon} alt="weather icon" />
            ) : (
              "🌞"
            )}
          </div>
        </div>
        <div className="col-3 current-forecast">
          <div>
            Humidity: <span id="humidity"> {weather.humidity || 34} </span>%
          </div>
          <div>
            Wind: <span id="wind">{Math.round(weather.wind) || 25}</span> km/h
          </div>
        </div>
      </div>

      <hr />

      <div className="row daily-forecast" id="forecast">
        This is the Forecast
      </div>
    </div>
  );
}
