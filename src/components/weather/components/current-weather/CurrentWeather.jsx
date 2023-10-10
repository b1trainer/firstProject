import React from "react";
import styles from "./CurrentWeather.module.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className={styles.weather}>
      <div className={styles.city}>
        <p>{data.city}</p>
        <p>{new Date().toLocaleDateString("en-US")}</p>
      </div>
      <p className={styles.description}>{data.weather[0].description}</p>
      <div className={styles.bottom}>
        <div className={styles.top}>
          <p className={styles.temperature}>{`${Math.round(
            data.main.temp
          )}°C`}</p>
          <img
            alt="weather-icon"
            className={styles.weather_icon}
            src={`Assets/${data.weather[0].icon}.png`}
          ></img>
        </div>
        <div className={styles.details}>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Details</span>
          </div>
          <hr class="border border-solid border-white rounded-full w-full" />
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Feels like</span>
            <span className={styles.parameter_value}>{`${Math.round(
              data.main.feels_like
            )}°C`}</span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Wind</span>
            <span
              className={styles.parameter_value}
            >{`${data.wind.speed} m/s`}</span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Humidity</span>
            <span
              className={styles.parameter_value}
            >{`${data.main.humidity} %`}</span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Pressure</span>
            <span
              className={styles.parameter_value}
            >{`${data.main.pressure} hPa`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
