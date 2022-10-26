import React, { FC, useEffect, useState } from "react";
import { RootState, useAppDispatch } from "./store";
import { getForcast } from "./store/actions/weatherAction";
import { City } from "./store/types";
import "./App.css";
import { useSelector } from "react-redux";
import { getCelsiusFromFahrenheit } from "./utils";

const cities: City[] = [
  {
    name: "Ottawa",
    latitude: 45.424721,
    longitude: -75.695,
  },
  {
    name: "Moscow",
    latitude: 55.751244,
    longitude: 37.618423,
  },
  {
    name: "Tokyo",
    latitude: 35.672855,
    longitude: 139.817413,
  },
];

const App: FC = () => {
  const dispatch = useAppDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  useEffect(() => {
    dispatch(getForcast(selectedCity));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity.name]);

  const changeCity = (index: number) => {
    setSelectedCity(cities[index]);
  };

  console.log("weatherData =>", weatherData);

  return (
    <div className="app-container">
      {weatherData && (
        <>
          <div className="header">
            {cities.map((city: City, index: number) => {
              return (
                <div className="item" key={index}>
                  <span
                    onClick={() => changeCity(index)}
                    className={
                      selectedCity.name === cities[index].name ? "active" : ""
                    }
                  >
                    {city.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="main-content">
            <div className="today-widget">
              <div className="main-text">Today</div>
              <div className="wrapper">
                <div className="icon-view">
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
                    alt="weather-icon"
                  />
                </div>
                <div className="text-view">
                  <div className="temerature-text">
                    {getCelsiusFromFahrenheit(weatherData.current.temp)}
                  </div>
                  <div className="main-text">
                    {weatherData.current.weather[0].main}
                  </div>
                </div>
              </div>
            </div>
            <div className="weekly-widget">
              <div className="day-widget">Today Widget</div>
              <div className="day-widget">Today Widget</div>
              <div className="day-widget">Today Widget</div>
              <div className="day-widget">Today Widget</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
