import React from 'react';
import * as S from './SpacePageStyle';
import Profile from 'Components/Profile/Profile';
import AvatarList from 'Elements/AvatarList/AvatarList';
import BookList from 'Components/BookList/BookList';

function SpacePage() {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.ProfileWrapper>
          <Profile />
          <AvatarList title="salon" type="salon" />
        </S.ProfileWrapper>
        <BookList />
      </S.ContentWrapper>
    </S.Container>
  );
}

export default SpacePage;
