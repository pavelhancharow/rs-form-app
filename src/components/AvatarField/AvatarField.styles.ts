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

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 110px;
      height: 110px;
      margin: auto;
      background-color: transparent;
      border: 2px solid var(--tertiary);
      border-radius: 50%;
      overflow: hidden;

      & > img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
      }
    }

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
