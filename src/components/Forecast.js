import React from "react";

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div>
      <h3>5-Day Forecast</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {forecast.map((day, index) => (
          <div key={index}>
            <p>{day.date}</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.icon}.png`}
              alt={day.description}
            />
            <p>{Math.round(day.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
