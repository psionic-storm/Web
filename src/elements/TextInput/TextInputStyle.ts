import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

interface InputProps {
  width: number;
  height: number;
}

export const Input = styled.input<InputProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
