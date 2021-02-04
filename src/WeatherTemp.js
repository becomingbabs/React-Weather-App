import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
      }
    
      function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
      }
    
      function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
      }

    if (unit === "celsius") {
        return (
            <div className="temp">
                 <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="units active" id="celsius-link">
                °C {" "}
                </span>
                <span className="units">|</span>
                <a href="/" className="units" id="fahrenheit-link" onClick={showFahrenheit}>
                    {" "}
                    °F
                </a>
            </div>
        );
    } else {
        return (
            <div className="temp">
                 <span className="temperature">{Math.round(fahrenheit())}</span>
                <a href="/" className="units" id="celsius-link" onClick={showCelsius}>
                °C {" "}
                </a>
                <span className="units">|</span>
                <span className="units active" id="fahrenheit-link" >
                    {" "}
                    °F
                </span>
            </div>
        );
    }
}