import React from 'react';
import * as S from './SalonPageStyle';
import Profile from 'Components/Profile/Profile';
import BookList from 'Components/BookList/BookList';
import AvatarList from 'Elements/AvatarList/AvatarList';

function SalonPage() {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.ProfileWrapper>
          <Profile />
          <AvatarList title="Participants" type="user" />
        </S.ProfileWrapper>
        <BookList />
      </S.ContentWrapper>
    </S.Container>
  );
}

export default SalonPage;
