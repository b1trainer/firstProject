export const GEO_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
const GEO_KEY = "45d361b6b9af4eab30774e93b14a1331";

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d82103751msh28e2768029abd56p1721d3jsn40a880d48951",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const currentWeatherFetch = (lat, lon) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${GEO_KEY}&units=metric`
  );
};

export const forecastWeatherFetch = (lat, lon) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${GEO_KEY}&units=metric`
  );
};
