import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./style/theme";
import { GlobalStyles } from "./style/GlobalStyles";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import DarkModeToggle from "./components/DarkModeToggle";
import LocationButton from "./components/LocationButton";

import HourlyForecast from "./components/HourlyForecast";
import Header from "./components/Header";
import { fetchDailyWeather, fetchWeather } from "./utlis/fetchWeather";
import WeaterInfo from "./components/WeaterInfo";
import { ToastContainer } from "react-toastify";
import {
  processHourlyWeatherData,
  processDailyWeatherData,
} from "./utlis/prcessWeaterData";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1280px;
  height: 100vh;

  margin: 0 auto;
  padding: 20px;

  .info {
    margin-top: 50px;
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.text};
  }
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    const dm = localStorage.getItem("darkMode");
    if (dm) {
      setDarkMode(true);
    }
    const c = localStorage.getItem("city");
    if (c) {
      handleSearch(c);
      setCity(c);
    }
  }, []);

  const handleSearch = async (value) => {
    const res = await fetchWeather(value);
    const daily = await fetchDailyWeather(value);

    if (res) {
      const dailyData = processDailyWeatherData(daily);
      const hourlyData = processHourlyWeatherData(daily);
      setData({ ...res, daily: dailyData, hourly: hourlyData });
      setCity(value);
      localStorage.setItem("city", value);
    }
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleSearch={handleSearch}
        />
        {data ? (
          <WeaterInfo data={data} city={city} />
        ) : (
          <h2 className="info">Please search city!</h2>
        )}
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
