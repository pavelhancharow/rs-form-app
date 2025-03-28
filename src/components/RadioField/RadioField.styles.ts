import styled from 'styled-components';

const RadioFieldUI = styled.label`
  display: flex;
  cursor: pointer;
  gap: 4px;
  align-items: center;

  & input[type='radio'] {
    display: none;
  }

  & span {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--tertiary);
    display: inline-block;
    transition: all 0.3s;
  }

  & input[type='radio']:checked + span:before {
    content: '';
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: var(--accent-primary);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default RadioFieldUI;
