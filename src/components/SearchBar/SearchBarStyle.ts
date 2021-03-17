import InputForm from 'Elements/InputForm/InputForm';
import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';

export const Container = styled.div`
  width: 240px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 1px solid ${PALETTE.GRAY[3]};
  border-radius: 5px;
  padding: 7px 10px;
`;
