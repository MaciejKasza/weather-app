import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleButton = styled.button`
  /* background: ${({ theme }) => theme.buttonBg}; */
  color: ${({ theme }) => theme.text};

  font-size: 14px;
  font-weight: bold;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
`;

const ToogleSwitch = styled.div`
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const handleSetDarkMode = (darkMode) => {
    if (darkMode) {
      localStorage.removeItem("darkMode");
    } else {
      localStorage.setItem("darkMode", true);
    }

    setDarkMode(!darkMode);
  };

  return (
    <ToggleContainer>
      <ToggleButton>
        <ToogleSwitch>
          <label className="switch">
            <input
              type="checkbox"
              onChange={() => handleSetDarkMode(darkMode)}
            />
            <span className="slider round"></span>
          </label>
        </ToogleSwitch>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </ToggleButton>
    </ToggleContainer>
  );
};

export default DarkModeToggle;
