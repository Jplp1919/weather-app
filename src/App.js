import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const API_KEY = "a2732ae5f1f8452ed929eb74dd458655";

  const handleSearch = async (city) => {
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      setWeather(weatherResponse.data);

      const formattedForecast = forecastResponse.data.list
        .filter((item, index) => index % 8 === 0)
        .map((item) => ({
          date: item.dt_txt.split(" ")[0],
          temp: item.main.temp,
          icon: item.weather[0].icon,
          description: item.weather[0].description,
        }));

      setForecast(formattedForecast);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherDetails weather={weather} />
      <Forecast forecast={forecast} />
    </div>
  );
};

export default App;
