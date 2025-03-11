import React from "react";
import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import SearchBar from "./SearchBar";
import LocationButton from "./LocationButton";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
  margin-bottom: 15px;

  @media (width <= 889px) {
    flex-wrap: wrap;
    & > *:nth-child(1) {
      flex-basis: 51%;
      order: 1;
    }

    & > *:nth-child(2) {
      order: 3;
    }

    & > *:nth-child(3) {
      order: 2;
    }
  }
`;

const Header = ({ darkMode, setDarkMode, handleSearch }) => {
  return (
    <HeaderContainer>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchBar handleSearch={handleSearch} />
      <LocationButton handleSearch={handleSearch} />
    </HeaderContainer>
  );
};

export default Header;
