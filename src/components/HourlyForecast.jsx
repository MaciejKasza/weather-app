import React from "react";
import styled from "styled-components";
import { getWeaterIcon } from "../utlis/weatherIcon";
import { formatDate } from "../utlis/timeAndDate";
import { FaLocationArrow } from "react-icons/fa";

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

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const ForecastItem = styled.div`
  display: flex;
  flex-direction: column;
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

  svg {
    transform: rotate(315deg);
  }
`;

const HourlyForecast = ({ data }) => {
  console.log("Data received:", data); // Poprawne logowanie

  if (!data || data.length === 0) {
    return <p>Loading forecast...</p>;
  }

  return (
    <Card>
      <h3>Hourly Forecast</h3>
      <div className="content">
        {data.map((hour, index) => (
          <ForecastItem key={index}>
            <p className="hour">{hour.hour}</p>
            <img src={getWeaterIcon(hour.icon)} alt="weather icon" />
            <p className="temp">{Math.floor(hour.temp)}°C</p>
            <FaLocationArrow />
            <p className="wind">7km/h</p>
          </ForecastItem>
        ))}
      </div>
    </Card>
  );
};

export default HourlyForecast;
