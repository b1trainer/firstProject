import React from "react";
import styles from "./ForecastWeather.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForecastWeather = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const foreCastDay = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index} className={styles.dailyItem}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles.daily}>
                  <img
                    alt="weather"
                    className={styles.icon_small}
                    src={`Assets/${item.weather[0].icon}.png`}
                  ></img>
                  <label className={styles.day}>{foreCastDay[index]}</label>
                  <label className={styles.description}>
                    {item.weather[0].description}
                  </label>
                  <label className={styles.temp}>{`${Math.round(
                    item.main.temp_min
                  )}°C / ${Math.round(item.main.temp_max)}°C`}</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.dayDetails}>
              <hr></hr>
                <div className={styles.dayDetailsItem}>
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className={styles.dayDetailsItem}>
                  <label>Humidity</label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className={styles.dayDetailsItem}>
                  <label>Clouds</label>
                  <label>{item.clouds.all}</label>
                </div>
                <div className={styles.dayDetailsItem}>
                  <label>Wind speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className={styles.dayDetailsItem}>
                  <label>Sea level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className={styles.dayDetailsItem}>
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default ForecastWeather;
