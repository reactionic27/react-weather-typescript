import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "./store";
import { getForcast } from "./store/actions/weatherAction";
import { City } from "./store/types";
import "./App.css";

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
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  useEffect(() => {
    dispatch(getForcast("test"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeCity = (index: number) => {
    setSelectedCity(cities[index]);
  };

  console.log("selectedCity =>", selectedCity);

  return (
    <div className="app-container">
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
        <div className="today-widget">Today Widget</div>
        <div className="weekly-widget">
          <div className="day-widget">Today Widget</div>
          <div className="day-widget">Today Widget</div>
          <div className="day-widget">Today Widget</div>
          <div className="day-widget">Today Widget</div>
        </div>
      </div>
    </div>
  );
};

export default App;
