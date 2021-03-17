import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';
import Button from 'Elements/Button/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${PALETTE.WHITE};
  border-bottom: 2px solid ${PALETTE.GRAY[2]};
  height: 50px;
  position: fixed;
  width: 100%;
`;

export const Logo = styled.div`
  margin: 0 20px;
  color: ${PALETTE.BLACK};
  font-weight: 600;
  font-size: 20px;
`;

export const LogoAndSearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SignInButton = styled(Button)`
  margin: 0 20px;
  padding: 7px 15px;
  top: 0;
  right: 0;
`;
