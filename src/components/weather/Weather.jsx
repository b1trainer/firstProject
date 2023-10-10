import React, { useState } from "react";
import styles from "./Weather.module.css";

import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import ForecastWeather from "./components/forecast/ForecastWeather";
import { currentWeatherFetch, forecastWeatherFetch } from "./services/api";

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setforecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    Promise.all([currentWeatherFetch(lat, lon), forecastWeatherFetch(lat, lon)])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });

        const forecasteResponse = await response[1].json();
        setforecastWeather({ city: searchData.label, ...forecasteResponse });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div class='flex justify-center'>
      <div className={styles.container}>
        <div className={styles.search}>
          <Search onSearchChange={handleOnSearchChange} />
        </div>
        <div className={styles.current}>
          {currentWeather && <CurrentWeather data={currentWeather} />}
        </div>
        <div className={styles.forecast}>
          {forecastWeather && <ForecastWeather data={forecastWeather} />}
        </div>
      </div>
    </div>
  );
};

export default Weather;
