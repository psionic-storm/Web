import ButtonEl from 'Elements/Button/Button';
import PALETTE from 'Styles/color-variables';
import styled from 'styled-components';

export const Container = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin: 0 0 6px 20px;
`;

export const Button = styled(ButtonEl)`
  border: none;
  font-weight: normal;
  padding: 0;
  margin-left: 20px;
  color: ${PALETTE.GRAY[4]};
  &:hover {
    color: red;
  }
`;

export const BookListWrapper = styled.div`
  display: grid;
  margin: 30px;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const Img = styled.img`
  width: 100%;
  cursor: pointer;
  border: 1px solid ${PALETTE.GRAY[3]};
`;

export const NoBookImageWrapper = styled.div`
  width: 100%;
  background-color: ${PALETTE.GRAY[2]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
