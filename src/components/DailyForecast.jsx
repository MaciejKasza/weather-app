import React from "react";
import styled from "styled-components";
import { getWeaterIcon } from "../utlis/weatherIcon";
import { formatDate } from "../utlis/timeAndDate";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.cardBg};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    text-align: center;
    font-size: 26px;
    margin-bottom: 15px;
  }
`;

const ForecastItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  max-height: 40px;
  img {
    flex-basis: 25%;
    max-width: 60px;
  }

  .temp {
    text-align: center;
    flex-grow: 1;
    font-weight: bold;
    font-size: 22px;
  }

  .date {
    flex-basis: 50%;
    text-align: center;
  }
`;

const DailyForecast = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>Loading forecast...</p>;
  }

  return (
    <Card>
      <h3>5 Days Forecast</h3>
      {data
        .filter((item) => {
          if (new Date().getDate() !== new Date(item.date).getDate())
            return true;
        })
        .map((day, index) => (
          <ForecastItem key={index}>
            <img src={getWeaterIcon(day.icon)} alt="weather icon" />
            <p className="temp">{Math.floor(day.maxTemp)}°C</p>
            <p className="date">{formatDate(new Date(day.date))}</p>
          </ForecastItem>
        ))}
    </Card>
  );
};

export default DailyForecast;
