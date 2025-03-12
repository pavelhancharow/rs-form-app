import styled from 'styled-components';

const CheckboxUI = styled.label`
  display: flex;
  gap: 10px;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  }

  & > div input {
    width: 1.2em;
    height: 1.2em;
    background-color: var(--tertiary);
    border-radius: 4px;
    appearance: none;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
  }

  & span {
    position: absolute;
    color: var(--primary);
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  & > div svg {
    width: 0.8em;
    height: 0.8em;
  }

  & > div input:checked {
    background-color: var(--blue-800);
  }

  & > div input:checked ~ span {
    opacity: 1;
  }

  & > div input:checked + span > svg {
    fill: var(--primary);
    stroke: var(--primary);
  }
`;

export default CheckboxUI;
