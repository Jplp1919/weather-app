import React from "react";
import translations from "../translations";
import translateDescription from "../utils/translateDescription";

const Forecast = ({ forecast, language }) => {
  if (!forecast) return null;


  return (
    <div>
      <h3>{translations[language].forecastTitle}</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {forecast.map((day, index) => (
          <div key={index}>
            <p>{day.date}</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.icon}.png`}
              alt={day.description}
            />
            <p>{Math.round(day.temp)}°C</p>
            <p>{translateDescription(day.description, language)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
