import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';

export const Container = styled.div`
  label + input {
    margin: 9px 0;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  border: 2px solid ${PALETTE.GRAY[3]};
  border-radius: 5px;
  font-size: 16px;
  height: 42px;
  padding: 0 9px;
`;
