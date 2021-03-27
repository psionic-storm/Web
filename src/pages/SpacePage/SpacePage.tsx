import React, { useCallback, useEffect, useState } from 'react';
import * as S from './SpacePageStyle';
import Profile from 'Components/Profile/Profile';
import AvatarList from 'Elements/AvatarList/AvatarList';
import BookList from 'Components/BookList/BookList';
import SearchModal from 'Components/SearchModal/SearchModal';
import Header from 'Components/Header/Header';
import useModal from 'Hooks/redux/useModal';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetSpace, requestUpdateSpace } from 'Modules/space/spaceActions';
import { RootState } from 'Modules';

function SpacePage() {
  const params = useParams<{ spaceId: string }>();
  const spaceId = parseInt(params.spaceId);
  const { space, addedBookId, spaceNameModifiedCount } = useSelector((state: RootState) => state.spaceReducer);
  const [editMode, setEditMode] = useState(false);
  const [spaceName, setSpaceName] = useState<string>('');

  const { modalOpen } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetSpace({ spaceId }));
  }, [dispatch, spaceId, addedBookId, spaceNameModifiedCount]);

  const handleClickEditSpaceName = useCallback(() => {
    setEditMode(true);
    space && setSpaceName(space.name);
  }, [space]);

  const handleChangeSpaceName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSpaceName(e.target.value);
  }, []);

  const handleCloseEditMode = useCallback(
    (e) => {
      if (editMode && !e.target.closest('.space-name')) {
        dispatch(requestUpdateSpace({ spaceId, name: spaceName }));
        setEditMode(false);
      }
    },
    [editMode, dispatch, spaceId, spaceName],
  );

  return (
    <>
      <Header />
      <S.Container onClick={handleCloseEditMode}>
        <S.ContentWrapper>
          <S.ProfileWrapper>
            <Profile name={space?.owner_nickname} loginId={space?.owner_loginId} />
            <AvatarList title="salon" type="salon" />
          </S.ProfileWrapper>
          <S.SpaceNameWrapper>
            {editMode ? (
              <S.InputForm value={spaceName} onChange={handleChangeSpaceName} className="space-name" />
            ) : (
              <S.SpaceName>{space?.name}</S.SpaceName>
            )}
            {editMode || <S.Button onClick={handleClickEditSpaceName}>Edit Space Name</S.Button>}
          </S.SpaceNameWrapper>
          <BookList books={space?.books} />
        </S.ContentWrapper>
        {modalOpen && <SearchModal />}
      </S.Container>
    </>
  );
}

export default SpacePage;
