import styled from 'styled-components';
import ButtonEl from 'Elements/Button/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
`;

export const Button = styled(ButtonEl)`
  font-size: 18px;
  border: none;
  &:hover {
    color: red;
  }
`;
