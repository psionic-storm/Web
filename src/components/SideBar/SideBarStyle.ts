import styled from 'styled-components';
import ButtonEl from 'Elements/Button/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled(ButtonEl)`
  border: none;
  &:hover {
    color: red;
  }
`;
