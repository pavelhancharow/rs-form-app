import styled from 'styled-components';

interface ErrorFieldTextProps {
  left?: number;
  bottom?: number;
}

export const ErrorFieldText = styled.p<ErrorFieldTextProps>`
  position: absolute;
  bottom: ${({ bottom }) => (bottom ? `${bottom}px` : '-16px')};
  left: ${({ left }) => (left ? `${left}px` : '4px')};
  font-size: 12px;
  color: var(--warning);
`;
