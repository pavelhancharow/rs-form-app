import styled from 'styled-components';

const RadioGroupUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > div {
    display: flex;
    gap: 8px;
  }

  &[data-error='true'] {
    & > span {
      color: var(--warning);
    }

    & > div label span {
      border-color: var(--warning);
    }
  }
`;

export default RadioGroupUI;
