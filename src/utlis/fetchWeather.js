import { Slide, toast } from "react-toastify";
import { getCityCordsByName } from "./fetchLocation";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      handleError(response);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("error:", error);
    return null;
  }
};

const fetchHourlyWeather = async (city) => {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
};

export const fetchDailyWeather = async (city, cnt = 5) => {
  const cords = await getCityCordsByName(city);

  const url = `https://api.openweathermap.org/data/2.5/forecast/?lat=${cords.lat}&lon=${cords.lon}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      handleError(response);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("error:", error);
    return null;
  }
};

const handleError = (res) => {
  switch (res.status) {
    case 404:
      toast.error(`City not found!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      break;

    default:
      toast.error(`Unexpected error!`, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      break;
  }
};
