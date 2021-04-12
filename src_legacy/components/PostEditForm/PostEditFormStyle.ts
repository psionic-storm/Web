import InputForm from 'Elements/InputForm/InputForm';
import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';
import ButtonEl from 'Elements/Button/Button';

export const Container = styled.div`
  width: 800px;
  border: 2px solid ${PALETTE.GRAY[2]};
  border-radius: 10px;
  margin: 16px 0 0 0;
  padding: 20px;
`;

export const TitleInputForm = styled(InputForm)`
  & > input {
    border: 2px solid ${PALETTE.GRAY[2]};
  }
`;

export const PageInputForm = styled(InputForm)`
  & > input {
    border: 2px solid ${PALETTE.GRAY[2]};
  }
`;

export const ContentInputForm = styled.textarea`
  border: 2px solid ${PALETTE.GRAY[2]};
  border-radius: 5px;
  width: 100%;
  height: 400px;
  padding: 9px;
  font-size: 16px;
  resize: none;
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
