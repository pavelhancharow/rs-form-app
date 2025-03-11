import styled from 'styled-components';

const RootLayoutUI = styled.div`
  & header {
    margin-bottom: 50px;
  }

  & main {
    display: flex;
    gap: 10px;
    width: 100%;
    height: 73vh;
    background-color: var(--gray-100);
    opacity: 0.6;
    border-radius: 1rem;
    overflow: hidden;
  }
`;

export default RootLayoutUI;
