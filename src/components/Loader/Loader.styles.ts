import styled from 'styled-components';

const LoaderUI = styled.div`
  width: fit-content;
  font-weight: 600;
  font-family: monospace;
  font-size: 1.5em;
  clip-path: inset(0 3ch 0 0);
  animation: l4 1s steps(4) infinite;

  &:before {
    content: 'Loading...';
    color: var(--accent-primary);
  }

  @keyframes l4 {
    to {
      clip-path: inset(0 -1ch 0 0);
    }
  }
`;

export default LoaderUI;
