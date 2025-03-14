import styled from 'styled-components';

const FallbackUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  color: var(--warning);
  padding: 20px 30px;

  & p:last-child {
    text-align: center;
  }
`;

export default FallbackUI;
