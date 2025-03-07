import React from "react";
import styled from "styled-components";
import LiveTime from "./LiveTime";
import { formatDate } from "../utlis/timeAndDate";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.cardBg};
  padding: 50px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  /* width: 400px; */

  .city {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 24px;
  }

  .time {
    line-height: 1;
    font-weight: bold;
    font-size: 96px;
  }

  .date {
    font-size: 20px;
  }
`;

const InfoCard = ({ city }) => {
  const date = new Date();

  return (
    <Card>
      <p className="city">{city}</p>
      <p className="time">
        <LiveTime />
      </p>
      <p className="date">{formatDate(date)}</p>
    </Card>
  );
};

export default InfoCard;
