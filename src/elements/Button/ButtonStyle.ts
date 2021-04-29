import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${PALETTE.GRAY[2]};
  }
`;
