import styled from '@emotion/styled';
import PALETTE from 'Styles/color-variables';

interface ButtonProps {
  width?: number;
  height?: number;
}

export const Button = styled.button<ButtonProps>`
  padding: 7px;
  background-color: ${PALETTE.WHITE};
  border: 1px ${PALETTE.GRAY[3]} solid;
  border-radius: 3px;
  cursor: pointer;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
