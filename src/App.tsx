import React, { FC, useEffect } from "react";
import { useAppDispatch } from "./store";
import { getForcast } from "./store/actions/weatherAction";
import "./App.css";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getForcast("test"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="app-container">Weather</div>;
};

export default App;
