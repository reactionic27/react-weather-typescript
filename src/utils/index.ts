export const getCelsiusFromFahrenheit = (fahrenheight: number) => {
  return Math.floor(((fahrenheight - 32) * 5) / 9) + "°";
};
