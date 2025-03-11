import React from "react";
import styled from "styled-components";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { getCityFromLocation } from "../utlis/fetchLocation";
import { toast } from "react-toastify";

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};

  font-size: 18px;

  padding: 10px 14px;
  border-radius: 40px;
  opacity: 0.8;
  cursor: pointer;

  transition: opacity 0.3s ease-in;

  &:hover {
    opacity: 1;
  }
`;

const LocationButton = ({ handleSearch }) => {
  const handleClick = () => {
    getCityFromLocation()
      .then((cityName) => {
        if (!!cityName) {
          handleSearch(cityName);
        } else {
          toast.error("There was a problem finding your location!");
        }
      })
      .catch((error) => {
        console.error("Błąd:", error);
      });
  };

  return (
    <LocationContainer>
      <Button onClick={handleClick}>
        <FaLocationCrosshairs />
        Current Location
      </Button>
    </LocationContainer>
  );
};

export default LocationButton;
