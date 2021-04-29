import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  background-color: ${PALETTE.WHITE};
  position: fixed;
`;

export const Logo = styled.div``;

export const HeaderBlock = styled.div`
  height: 50px;
`;
