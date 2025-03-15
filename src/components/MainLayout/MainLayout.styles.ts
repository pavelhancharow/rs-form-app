import styled, { css } from 'styled-components';

const MainLayoutUI = styled.div<{ $content: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 36px;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  ${({ $content }) =>
    $content &&
    css`
      justify-content: flex-start;

      &::after {
        content: '';
        display: block;
        height: 24px;
        width: 100%;
      }
    `}

  & > div {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${({ $content }) =>
      $content &&
      css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        align-items: stretch;
      `}
  }
`;
export default MainLayoutUI;
