/** @format */

import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <Weather defaultCity="Santiago" />
      <hr />

      <div className="footer row">
        <div className="col coded-by">
          <a
            href="https://github.com/becomingbabs/react-weather-app"
            id="open-source-link"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Open source code {" "}</strong>
          </a>
          by Barbara,
          <br/>
          inspired by {" "}  
          <a href="https://www.wizardingworld.com/" target="_blank"
            rel="noreferrer" >
              Harry Potter
          </a>
            <br/>
              👩🏻‍💻
            <br/>
              Currently located in Santiago, Chile
        </div>
      </div>
    </div>
  );
}
