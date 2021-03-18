import React from 'react';
import * as S from './SpacePageStyle';
import Profile from 'Components/Profile/Profile';
import SalonList from 'Components/SalonList/SalonList';
import BookList from 'Components/BookList/BookList';

function SpacePage() {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.ProfileWrapper>
          <Profile />
          <SalonList />
        </S.ProfileWrapper>
        <BookList />
      </S.ContentWrapper>
    </S.Container>
  );
}

export default SpacePage;
