import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  gap: 10px;
  flex-grow: 1;

  @media (width <= 889px) {
    margin-top: 15px;
    padding: 0;
  }
`;

const Input = styled.input`
  padding: 10px 10px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background: none;
  outline: none;

  color: ${({ theme }) => theme.text};
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;

  padding: 12px 24px;

  height: 50px;
  border-radius: 40px;

  background: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 10px;
  border-left: 2px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

const SearchBar = ({ handleSearch }) => {
  const [city, setCity] = useState("");

  const handleButtonClick = () => {
    handleSearch(city);
  };

  return (
    <SearchContainer>
      <Label htmlFor="search">
        <FaSearch />
        <Input
          id="search"
          type="text"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleButtonClick();
          }}
          autocomplete="off"
        />
        {city && <Button onClick={() => handleButtonClick()}>Serach</Button>}
      </Label>
    </SearchContainer>
  );
};

export default SearchBar;
