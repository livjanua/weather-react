import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Ballito",
    day: "Sunday",
    condition: "Sunny",
    humidity: 67,
    wind: 13,
    icon: "☀️",
    temperature: 35,
    unit: "°C",
  };

  return (
    <div className="Weather">
      <header>
        <form>
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="current-weather">
          <div>
            <h1 className="current-city">{weatherData.city}</h1>
            <p class="current-details">
              {weatherData.day}, {weatherData.condition} <br />
              Humidity: <strong>{weatherData.humidity}%</strong>, Wind:
              <strong>{weatherData.wind} km/h</strong>
            </p>
          </div>
          <div className="current-temperature">
            <span className="current-temperature-icon">{weatherData.icon}</span>
            <span className="current-temperature-value">
              {weatherData.temperature}
            </span>
            <span className="current-temperature-unit">{weatherData.unit}</span>
          </div>
        </div>
      </main>
    </div>
  );
}
