import styled from 'styled-components';

const TextFieldUI = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

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
      border-color: var(--accent-primary);
    }

    &:focus + label span,
    &:not(:placeholder-shown) + label span {
      font-size: 12px;
      transform: translate(0, -150%);
      background-color: var(--accent-primary);
      color: var(--primary);
      padding-left: 4px;
      padding-right: 4px;
    }

    &:not(:focus):not(:placeholder-shown) + label span {
      background-color: var(--tertiary);
    }
  }

  & p {
    position: absolute;
    bottom: -16px;
    left: 4px;
    font-size: 14px;
    color: var(--warning);
  }

  &[data-error='true'] {
    & label span,
    & input {
      color: var(--warning);
    }

    & input {
      border-color: var(--warning);

      &:focus + label span,
      &:not(:placeholder-shown) + label span,
      &:not(:focus):not(:placeholder-shown) + label span {
        background-color: var(--warning);
      }
    }
  }
`;

export default TextFieldUI;
