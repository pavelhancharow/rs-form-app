import styled from 'styled-components';

const FileFieldUI = styled.div`
  display: flex;

  & > input {
    display: none;
    opacity: 0;
    cursor: pointer;
  }

  & > label {
    width: fit-content;
    padding: 6px 16px;
    margin: 0 auto;
    border-radius: 4px;
    color: var(--primary);
    background-color: var(--accent-primary);
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export default FileFieldUI;
