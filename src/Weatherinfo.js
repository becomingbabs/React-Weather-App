import React from "react"; 
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weatherinfo(props) {
    return (
        
      <div className="row current-info-row">
      <div className="col-3 current-city">
        {props.data.city}, {props.data.country}
        <div className="date-time" id="date">
        <FormattedDate date={props.data.date} />
        </div>
        <div className="temp">
          <span className="units active" id="celsius-link">
            {Math.round(props.data.temperature)} °C{" "}
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
        {props.data.description}
          {<br />}
          {props.data.icon ? (
              <img src={props.data.icon} alt="weather icon" />
            ) : (
              "🌞"
            )} 
        </div>
      </div>
      <div className="col-3 current-forecast">
        <div>
          Humidity: <span id="humidity"> {props.data.humidity} </span>%
        </div>
        <div>
          Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
        </div>
      </div>
    </div>
    ); 
}