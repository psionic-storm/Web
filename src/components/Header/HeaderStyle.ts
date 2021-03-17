import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';
import Button from 'Elements/Button/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${PALETTE.WHITE};
  height: 50px;
  cursor: pointer;
`;

export const Logo = styled.div`
  margin: 0 20px;
  color: ${PALETTE.BLACK};
  font-weight: 600;
  font-size: 20px;
`;

export const SignInButton = styled(Button)`
  margin: 0 20px;
  background-color: ${PALETTE.GRAY[3]};
  border-radius: 99px;
  padding: 7px 15px;
  font-size: 14px;
  &:hover {
    background-color: ${PALETTE.BLACK};
  }
`;
