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

    & > p {
      position: absolute;
      bottom: -32px;
      left: 0;
      font-size: 14px;
      color: var(--warning);
    }
  }

  &[data-error='true'] > *:first-child > span {
    border-color: var(--warning);
  }
`;

export default AvatarFieldUI;
