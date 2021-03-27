import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const PostWrapper = styled.div`
  margin-top: 20px;
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
