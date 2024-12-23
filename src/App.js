import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import './App.css';
import translations from "./translations";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt_br" : "en"));
  };

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
      <h1>{translations[language].title}</h1>
      <button onClick={toggleLanguage}>
        {language === "en"
          ? translations[language].switchToPortuguese
          : translations[language].switchToEnglish}
      </button>
      <SearchBar onSearch={handleSearch} language={language} />
      <WeatherDetails language={language} weather={weather} />
      <Forecast language={language} forecast={forecast} />
    </div>
  );
};

export default App;
