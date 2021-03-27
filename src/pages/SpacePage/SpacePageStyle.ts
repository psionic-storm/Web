import styled from 'styled-components';
import ButtonEl from 'Elements/Button/Button';
import PALETTE from 'Styles/color-variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpaceName = styled.p`
  font-weight: bold;
  font-size: 24px;
`;

export const Button = styled(ButtonEl)`
  border: none;
  font-weight: normal;
  padding: 0;
  margin-left: 20px;
  margin-top: 6px;
  color: ${PALETTE.GRAY[4]};
  &:hover {
    color: red;
  }
`;

export const SpaceNameWrapper = styled.div`
  display: flex;
  margin: 30px 0 20px 20px;
`;

export const ContentWrapper = styled.div`
  width: 1200px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
`;
