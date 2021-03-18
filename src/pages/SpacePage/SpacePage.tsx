import React, { useCallback, useState } from 'react';
import * as S from './SpacePageStyle';
import Profile from 'Components/Profile/Profile';
import AvatarList from 'Elements/AvatarList/AvatarList';
import BookList from 'Components/BookList/BookList';
import SearchModal from 'Components/SearchModal/SearchModal';
import Header from 'Components/Header/Header';

function SpacePage() {
  // 모달 컨트롤 리덕스에서 해주자
  const [openModal, setOpenModal] = useState(false);

  const openBookSearchModal = useCallback(() => {
    setOpenModal(true);
  });

  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrapper>
          <S.ProfileWrapper>
            <Profile />
            <AvatarList title="salon" type="salon" />
          </S.ProfileWrapper>
          <BookList openBookSearchModal={openBookSearchModal} />
        </S.ContentWrapper>
        {openModal && <SearchModal />}
      </S.Container>
    </>
  );
}

export default SpacePage;
