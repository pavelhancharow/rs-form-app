import styled from 'styled-components';

interface AvatarUIProps {
  width: number;
  height: number;
}

const AvatarUI = styled.span<AvatarUIProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : '110px')};
  height: ${({ height }) => (height ? `${height}px` : '110px')};
  margin: 0 auto;
  background-color: transparent;
  border: 2px solid var(--tertiary);
  border-radius: 50%;
  overflow: hidden;

  & > img {
    width: ${({ width }) => (width ? `${width - 10}px` : '100px')};
    height: ${({ height }) => (height ? `${height - 10}px` : '100px')};
    object-fit: cover;
    border-radius: 50%;
  }
`;

export default AvatarUI;
