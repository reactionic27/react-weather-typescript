import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./store";
import { getForcast } from "./store/actions/weatherAction";
import { City } from "./store/types";
import { getCelsiusFromFahrenheit, getWeekday } from "./utils";
import { cities } from "./constants";
import "./App.css";

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
              {Array.from({ length: 4 }, (_, index) => {
                return (
                  <div className="day-widget" key={index}>
                    <div className="secondary-text">
                      {getWeekday(weatherData.daily[index + 1].dt)}
                    </div>
                    <div className="icon">
                      <img
                        src={`http://openweathermap.org/img/wn/${
                          weatherData.daily[index + 1].weather[0].icon
                        }.png`}
                        alt="weather-icon"
                      />
                    </div>
                    <div className="text">
                      {getCelsiusFromFahrenheit(
                        weatherData.daily[index + 1].temp.max
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
