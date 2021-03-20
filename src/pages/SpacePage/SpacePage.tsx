import React from 'react';
import * as S from './SpacePageStyle';
import Profile from 'Components/Profile/Profile';
import AvatarList from 'Elements/AvatarList/AvatarList';
import BookList from 'Components/BookList/BookList';
import SearchModal from 'Components/SearchModal/SearchModal';
import Header from 'Components/Header/Header';
import useModal from 'Hooks/redux/useModal';

function SpacePage() {
  const { modalOpen } = useModal();

  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrapper>
          <S.ProfileWrapper>
            <Profile />
            <AvatarList title="salon" type="salon" />
          </S.ProfileWrapper>
          <BookList />
        </S.ContentWrapper>
        {modalOpen && <SearchModal />}
      </S.Container>
    </>
  );
}

export default SpacePage;
