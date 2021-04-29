import styled from 'styled-components';

import PALETTE from 'Styles/color-variables';
import Button from 'Elements/Button/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  background-color: ${PALETTE.WHITE};
  position: fixed;
`;

export const Logo = styled.div`
  margin: 0 20px;
  color: ${PALETTE.BLACK};
  font-weight: normal;
  font-size: 20px;
  cursor: pointer;
`;

export const SignInButton = styled(Button)`
  border: none;
  margin: 0 10px;
  padding: 7px 15px;
`;

export const HeaderBlock = styled.div`
  height: 50px;
`;
