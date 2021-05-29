import styled from '@emotion/styled';
import PALETTE from 'Styles/color-variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${PALETTE.GRAY[2]};
  padding: 0 30px;
  position: fixed;
  z-index: 9999;
  background-color: ${PALETTE.WHITE};
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export const HeaderBlock = styled.div`
  height: 50px;
`;