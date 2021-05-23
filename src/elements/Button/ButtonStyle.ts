import styled from '@emotion/styled';
import PALETTE from 'Styles/color-variables';

export const Button = styled.button`
  padding: 7px;
  background-color: ${PALETTE.WHITE};
  border: 1px ${PALETTE.GRAY[3]} solid;
  border-radius: 3px;
  cursor: pointer;
`;
