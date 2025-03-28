import styled from 'styled-components';

const ErrorMessageUI = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.7;
  font-size: 1.15em;
  color: var(--warning);

  & > h2 {
    font-weight: var(--primary-font-weight);
  }
`;

export default ErrorMessageUI;
