import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';

export const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${PALETTE.GRAY[2]};
  }
`;

export const Content = styled.div`
  margin-left: 14px;
`;

export const Img = styled.img`
  width: 100px;
`;

export const NoBookImageWrapper = styled.div`
  width: 100px;
  height: 145px;
  background-color: ${PALETTE.GRAY[2]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 6px 0;
`;

export const SubTitle = styled.div`
  margin: 4px 0;
  font-weight: bold;
`;

export const Description = styled.div``;
