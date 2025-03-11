import React from "react";
import styled from "styled-components";
import WeatherCard from "./WeatherCard";
import DailyForecast from "./DailyForecast";
import InfoCard from "./InfoCard";
import HourlyForecast from "./HourlyForecast";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;

  & > div:nth-child(1) {
    grid-area: 1 / 1 / 2 / 5;
  }
  & > div:nth-child(2) {
    grid-area: 1 / 5 / 2 / 11;
    /* background-color: red; */
  }
  & > div:nth-child(3) {
    grid-area: 2 / 1 / 3 / 6;
  }
  & > div:nth-child(4) {
    grid-area: 2 / 6 / 3 / 11;
  }

  @media (width <= 889px) {
    display: flex;
    flex-direction: column;
  }
`;

const WeaterInfo = ({ city, data }) => {
  const infoCardData = {
    name: data.name,
    temp: data.main.temp,
    desc: data.weather[0].description,
  };

  return (
    <Container>
      <InfoCard city={city} />
      <WeatherCard
        temp={data.main.temp}
        tempFelsLike={data.main.feels_like}
        humidity={data.main.humidity}
        pressure={data.main.pressure}
        sunrise={data.sys.sunrise}
        sunset={data.sys.sunset}
        uv={data.main.humidity}
        wind={data.wind.speed}
        weater={data.weather[0].description}
        weaterIcon={data.weather[0].icon}
      />
      <DailyForecast data={data.daily} />
      <HourlyForecast data={data.hourly} />
    </Container>
  );
};

export default WeaterInfo;
