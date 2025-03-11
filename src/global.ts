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
    background-color: var(--gray-800);
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
`}`;
