import React from 'react';
import * as S from './SalonPageStyle';
import Profile from 'Components/Profile/Profile';
import BookList from 'Components/BookList/BookList';
import AvatarList from 'Elements/AvatarList/AvatarList';
import SearchModal from 'Components/SearchModal/SearchModal';
import Header from 'Components/Header/Header';
import useModal from 'Hooks/redux/useModal';

function SalonPage() {
  const { modalOpen } = useModal();

  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrapper>
          <S.ProfileWrapper>
            <Profile />
            <AvatarList title="Participants" type="user" />
          </S.ProfileWrapper>
          <BookList />
          {modalOpen && <SearchModal />}
        </S.ContentWrapper>
      </S.Container>
    </>
  );
}

export default SalonPage;
