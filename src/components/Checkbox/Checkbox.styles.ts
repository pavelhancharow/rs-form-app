import styled from 'styled-components';

const CheckboxUI = styled.label`
  position: relative;
  display: flex;
  gap: 10px;
  cursor: pointer;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  & > div input {
    width: 1.2em;
    height: 1.2em;
    background-color: var(--tertiary);
    border: 2px solid transparent;
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
    background-color: var(--accent-primary);
  }

  & > div input:checked ~ span {
    opacity: 1;
  }

  & > div input:checked + span > svg {
    fill: var(--primary);
    stroke: var(--primary);
  }

  &[data-error='true'] {
    & > div input {
      border-color: var(--warning);
    }
  }
`;

export default CheckboxUI;
