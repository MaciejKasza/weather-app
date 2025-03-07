import React from "react";
import styled from "styled-components";
import { LuSunset, LuSunrise } from "react-icons/lu";
import { formatTime } from "../utlis/timeAndDate";
import { WiHumidity } from "react-icons/wi";

import HumidityLight from "../assets/HumidityLight.png";
import HumidityDark from "../assets/HumidityDark.png";
import PressureLight from "../assets/PressureLight.png";
import PressureDark from "../assets/PressureDark.png";

import UvLight from "../assets/UvLight.png";
import UvDark from "../assets/UvDark.png";

import WindSpeedLight from "../assets/WindSpeedLight.png";
import WindSpeedDark from "../assets/WindSpeedDark.png";
import { getWeaterIcon } from "../utlis/weatherIcon";

const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media (width <= 669px) {
    display: flex;
    flex-direction: column;
  }
`;

const MainDetails = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    flex-grow: 1;
  }

  .temp {
    .main {
      font-size: 92px;
      line-height: 1;
      font-weight: bold;
    }
    .secondary {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      line-height: 1;

      span {
        margin-left: 4px;
        font-size: 32px;
        font-weight: bold;
      }
    }
  }

  .sun {
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 10px;

      .icon {
        svg {
          width: 40px;
          height: 40px;
        }
      }

      .desc {
        line-height: 1;
        .title {
          font-size: 20px;
        }

        .time {
          font-size: 16px;
        }
      }
    }
  }
`;

const Icon = styled.div`
  img {
    width: 80%;
  }

  p {
    font-size: 18px;
    text-transform: capitalize;
  }
  /* background-color: green; */

  @media (width <= 669px) {
    img {
      width: 60%;
    }
  }
`;

const ExtraDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  @media (width <= 669px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }

  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    line-height: 1;
    img {
      width: 58px;
      height: 58px;
    }
    .value {
      font-size: 18px;
      font-weight: bold;
    }
    .desc {
      font-size: 14px;
    }
  }

  /* background-color: yellow; */
`;

const WeatherCard = ({
  temp,
  tempFelsLike,
  humidity,
  wind,
  pressure,
  uv,
  sunrise,
  sunset,
  weater,
  weaterIcon,
}) => {
  const isDarkMode = !!localStorage.getItem("darkMode");
  console.log("temp", temp);

  // const temp = 24;
  // const tempFelsLike = 22;
  // const humidity = 35;
  // const wind = 5;
  // const pressure = 1013;
  // const uv = 8;
  // const sunset = formatTime(new Date());
  // const sunrise = formatTime(new Date());
  return (
    <Card>
      <MainDetails>
        <div className="temp">
          <p className="main">{Math.floor(temp)}°C</p>
          <p className="secondary">
            Feels like: <span>{Math.floor(tempFelsLike)}°C</span>
          </p>
        </div>
        <div className="sun">
          <div>
            <div className="icon">
              <LuSunrise />
            </div>
            <div className="desc">
              <p className="title">Sunrise</p>
              <p className="time"> {formatTime(sunrise)}</p>
            </div>
          </div>
          <div>
            <div className="icon">
              <LuSunset />
            </div>
            <div className="desc">
              <p className="title">Sunset</p>
              <p className="time">{formatTime(sunset)}</p>
            </div>
          </div>
        </div>
      </MainDetails>
      <Icon>
        <div className="icon">
          <img src={getWeaterIcon(weaterIcon)} alt="Weater icon" />
        </div>
        <p className="">{weater}</p>
      </Icon>
      <ExtraDetails>
        <div className="detail">
          {isDarkMode ? (
            <img src={HumidityDark} alt="Humidity icon" />
          ) : (
            <img src={HumidityLight} alt="Humidity icon" />
          )}
          <span className="value">{Math.floor(humidity)}%</span>
          <p className="desc">Humidity</p>
        </div>
        <div className="detail">
          {isDarkMode ? (
            <img src={WindSpeedDark} alt="Humidity icon" />
          ) : (
            <img src={WindSpeedLight} alt="Humidity icon" />
          )}
          <span className="value">{Math.floor(wind)}km/h</span>
          <p className="desc">Wind Speed</p>
        </div>
        <div className="detail">
          {isDarkMode ? (
            <img src={PressureDark} alt="Humidity icon" />
          ) : (
            <img src={PressureLight} alt="Humidity icon" />
          )}
          <span className="value">{pressure}hPa</span>
          <p className="desc">Pressure</p>
        </div>
        <div className="detail">
          {isDarkMode ? (
            <img src={UvDark} alt="Humidity icon" />
          ) : (
            <img src={UvLight} alt="Humidity icon" />
          )}
          <span className="value">-</span>
          <p className="desc">UV</p>
        </div>
      </ExtraDetails>
    </Card>
  );
};

export default WeatherCard;
