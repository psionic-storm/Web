import React, { useCallback, useState } from 'react';
import * as S from './SalonPageStyle';
import Profile from 'Components/Profile/Profile';
import BookList from 'Components/BookList/BookList';
import AvatarList from 'Elements/AvatarList/AvatarList';
import SearchModal from 'Components/SearchModal/SearchModal';
import Header from 'Components/Header/Header';

function SalonPage() {
  const [openModal, setOpenModal] = useState(false);

  const openBookSearchModal = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrapper>
          <S.ProfileWrapper>
            <Profile />
            <AvatarList title="Participants" type="user" />
          </S.ProfileWrapper>
          <BookList openBookSearchModal={openBookSearchModal} />
          {openModal && <SearchModal />}
        </S.ContentWrapper>
      </S.Container>
    </>
  );
}

export default SalonPage;
