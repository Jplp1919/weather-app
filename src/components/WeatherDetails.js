import React from "react";

const WeatherDetails = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: details } = weather;

  return (
    <div>
      <h2>{name}</h2>
      <p>{Math.round(main.temp)}°C</p>
      <p>{details[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${details[0].icon}.png`}
        alt={details[0].description}
      />
    </div>
  );
};

export default WeatherDetails;
