import React from "react"; 
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function Weatherinfo(props) {
    return (
        
      <div className="row current-info-row">
      <div className="col-3 current-city">
        {props.data.city}, {props.data.country}
        <div className="date-time" id="date">
        <FormattedDate date={props.data.date} />
        </div>
          <WeatherTemp celsius={props.data.temperature}/>
      </div>
      <div className="col-3 icon-description">
        <div id="description">
        {props.data.description}
        </div>
        <div id="icon">
        < WeatherIcon code={props.data.icon} alt={props.data.description} /> 
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