import InputForm from 'Elements/InputForm/InputForm';
import ButtonEl from 'Elements/Button/Button';
import PALETTE from 'Styles/color-variables';
import styled from 'styled-components';

export const Container = styled.div``;

export const CommentInputForm = styled(InputForm)`
  & > input {
    border: 2px solid ${PALETTE.GRAY[2]};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 6px 0;
`;

export const Button = styled(ButtonEl)`
  border: 2px solid ${PALETTE.GRAY[2]};
  margin: 0 4px;
`;
