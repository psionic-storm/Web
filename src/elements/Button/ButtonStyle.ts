import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';

interface ButtonProps {
  selectedCategory?: string;
  children?: string;
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border-radius: 5px;
  background-color: ${PALETTE.WHITE};
  color: ${(props) => (props.selectedCategory === props.children?.toLowerCase() ? 'red' : PALETTE.BLACK)};
  border: 2px solid ${PALETTE.GRAY[3]};
  padding: 14px;
  font-size: 16px;
  font-weight: bold;
`;
