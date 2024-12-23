import React, { useState } from "react";
import translations from "../translations";

const SearchBar = ({ onSearch, language }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(city);
    }
    setCity("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        placeholder={translations[language].searchPlaceholder}
        onChange={(e) => setCity(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        {translations[language].searchButton}
      </button>
    </div>
  );
};

export default SearchBar;
