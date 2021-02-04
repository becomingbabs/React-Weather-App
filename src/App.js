/** @format */

import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="Weather-App">
      <Weather defaultCity="Santiago" />
      <hr />

      <div className="footer row">
        <div className="col-10 coded-by">
          <a
            href="https://github.com/becomingbabs/react-weather-app"
            id="open-source-link"
            target="_blank"
            rel="noreferrer"
          >
            Open source code{" "}
          </a>
          by Barbara - 👩🏻‍💻 - Currently in Santiago, Chile
        </div>
      </div>
    </div>
  );
}
