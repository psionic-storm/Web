import styled from 'styled-components';
import ButtonEl from 'Elements/Button/Button';
import PALETTE from 'Styles/color-variables';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const PostWrapper = styled.div`
  margin-top: 20px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0;
`;

export const CategoryTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 140px;
  float: right;
  /* margin: 20px 40px 0 0; */
  position: absolute;
  top: 20px;
  right: 40px;
`;

export const Button = styled(ButtonEl)`
  border: none;
  font-weight: normal;
  padding: 0;
  margin-left: 20px;
  margin-top: 4px;
  color: ${PALETTE.GRAY[4]};
  &:hover {
    color: red;
  }
`;
