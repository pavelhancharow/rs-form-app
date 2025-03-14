import styled from 'styled-components';

const AvatarFieldUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  & > *:first-child {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &[data-error='true'] > *:first-child > span {
    border-color: var(--warning);
  }
`;

export default AvatarFieldUI;
