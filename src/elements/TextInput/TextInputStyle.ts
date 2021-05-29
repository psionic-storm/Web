import styled from '@emotion/styled';
import PALETTE from 'Styles/color-variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 10px 3px;
`;

interface InputProps {
  width: number;
  height: number;
}

export const Input = styled.input<InputProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 1px solid ${PALETTE.GRAY[3]};
  border-radius: 5px;
  padding: 0 6px;
`;
