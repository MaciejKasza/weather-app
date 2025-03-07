import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins','Arial', sans-serif;
    transition: all 0.3s ease-in-out;
  }

  button{
    font-family: 'Poppins','Arial', sans-serif;
    outline: none;
    border: none;
    background: none;
  }
`;
