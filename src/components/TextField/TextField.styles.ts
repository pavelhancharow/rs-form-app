import styled from 'styled-components';

const TextFieldUI = styled.div`
  position: relative;
  width: 100%;

  & label {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 16px;
    display: flex;
    align-items: center;
    pointer-events: none;

    & span {
      transition: all 0.15s ease-out;
      color: var(--secondary);
    }
  }

  & input {
    height: 48px;
    width: 100%;
    border: 2px solid var(--tertiary);
    border-radius: 4px;
    box-sizing: border-box;
    padding: 16px;

    &:focus {
      border-color: var(--blue-800);
    }

    &:focus + label span,
    &:not(:placeholder-shown) + label span {
      font-size: 12px;
      transform: translate(0, -150%);
      background-color: var(--blue-800);
      color: var(--primary);
      padding-left: 4px;
      padding-right: 4px;
    }

    &:not(:focus):not(:placeholder-shown) + label span {
      background-color: var(--tertiary);
    }
  }
`;

export default TextFieldUI;
