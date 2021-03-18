import React from 'react';
import * as S from './SpacePageStyle';
import Profile from 'Components/Profile/Profile';
import SalonList from 'Components/SalonList/SalonList';

function SpacePage() {
  return (
    <S.Container>
      <S.ContentWrapper>
        <Profile />
        <SalonList />
      </S.ContentWrapper>
    </S.Container>
  );
}

export default SpacePage;
