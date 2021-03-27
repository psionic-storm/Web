import React, { useEffect } from 'react';
import * as S from './SpacePageStyle';
import Profile from 'Components/Profile/Profile';
import AvatarList from 'Elements/AvatarList/AvatarList';
import BookList from 'Components/BookList/BookList';
import SearchModal from 'Components/SearchModal/SearchModal';
import Header from 'Components/Header/Header';
import useModal from 'Hooks/redux/useModal';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetSpace } from 'Modules/space/spaceActions';
import { RootState } from 'Modules';

function SpacePage() {
  const { spaceId } = useParams<{ spaceId: string }>();
  const { space, addedBookId } = useSelector((state: RootState) => state.spaceReducer);

  const { modalOpen } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetSpace({ spaceId: parseInt(spaceId) }));
  }, [dispatch, spaceId, addedBookId]);

  return (
    <>
      <Header />
      <S.Container>
        <S.ContentWrapper>
          <S.ProfileWrapper>
            <Profile name={space?.owner_nickname} loginId={space?.owner_loginId} />
            <AvatarList title="salon" type="salon" />
          </S.ProfileWrapper>
          <S.SpaceName>{space?.name}</S.SpaceName>
          <BookList books={space?.books} />
        </S.ContentWrapper>
        {modalOpen && <SearchModal />}
      </S.Container>
    </>
  );
}

export default SpacePage;
