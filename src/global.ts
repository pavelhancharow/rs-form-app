import { createGlobalStyle, css } from 'styled-components';
import mountains from './assets/mountains.jpg';

export default createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    font-family: var(--font-family-main), sans-serif;
    font-size: 16px;
    font-weight: var(--primary-font-weight);
    color: var(--secondary);
    background-color: var(--secondary);
    background-image: url(${mountains});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 50px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  select {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    background: transparent;
    border: none;
    outline: none;
  }

  select {
    width: fit-content;
  }

  ul {
    list-style: none;
  }

  input {
    cursor: auto;
  }

  button:disabled {
    background-color: var(--disabled);
    cursor: not-allowed;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`}`;
