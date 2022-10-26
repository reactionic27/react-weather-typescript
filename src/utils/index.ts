import moment from "moment";

export const getCelsiusFromFahrenheit = (fahrenheight: number) => {
  return Math.floor(((fahrenheight - 32) * 5) / 9) + "°";
};

export const getWeekday = (seconds: number) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdays[moment.unix(seconds).weekday()];
};
