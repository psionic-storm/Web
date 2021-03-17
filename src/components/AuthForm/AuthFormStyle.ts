import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';
import Button from 'Elements/Button/Button';
import InputFormEl from 'Elements/InputForm/InputForm';

export const Container = styled.div`
  border: 2px solid ${PALETTE.GRAY[3]};
  border-radius: 10px;
  width: 480px;
  padding: 70px;
`;

export const InputForm = styled(InputFormEl)``;

export const SignInButton = styled(Button)`
  color: ${PALETTE.WHITE};
  background-color: ${PALETTE.BLACK};
  margin: 7px 0;
  border: none;
`;

export const SocialSignInButton = styled(Button)`
  margin: 7px 0;
`;
