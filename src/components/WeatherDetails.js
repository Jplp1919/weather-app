import React from "react";
import translations from "../translations";
import translateDescription from "../utils/translateDescription";

const WeatherDetails = ({ weather, language }) => {
  if (!weather) return null;

  const { name, sys, main, weather: details } = weather;

  return (
    <div className="weather-card">
      <h2>
        {name}, {translations[language].country}: {sys.country}
      </h2>
      <p>{translations[language].temperature}: {Math.round(main.temp)}°C</p>
      <p>{translations[language].description}: {translateDescription(details[0].description, language)}</p>
      <img
        src={`http://openweathermap.org/img/wn/${details[0].icon}.png`}
        alt={details[0].description}
      />
    </div>
  );
};

export default WeatherDetails;
