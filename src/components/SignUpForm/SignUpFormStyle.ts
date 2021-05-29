import styled from '@emotion/styled';
import Button from 'Elements/Button/Button';
import PALETTE from 'Styles/color-variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 480px;
  margin-top: 100px;
  padding: 20px;
  border-radius: 10px;
  box-shadow:  4px 4px 8px #a8a8a8;
`;

export const InputWrapper = styled.div`
  margin-top: 20px;
`;

export const SignUpButton = styled(Button)`
  width: 340px;
  height: 45px;
  margin-top: 10px;
  background-color: ${PALETTE.BLACK};
  color: ${PALETTE.WHITE};
  font-weight: bold;
  border: none;
  
  &:hover {
    background-color: ${PALETTE.GRAY[6]};
  }
`;
