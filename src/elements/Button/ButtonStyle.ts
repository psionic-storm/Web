import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  background-color: ${PALETTE.WHITE};
  color: ${PALETTE.BLACK};
  border: 2px solid ${PALETTE.GRAY[3]};
  padding: 14px;
  font-size: 16px;
  font-weight: bold;
`;
