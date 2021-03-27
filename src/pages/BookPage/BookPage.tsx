import React, { useEffect, useMemo } from 'react';
import * as S from './BookPageStyle';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetBook as requestGetBookSpace } from 'Modules/space/spaceActions';
import { useParams } from 'react-router';
import SideBar from 'Components/SideBar/SideBar';
import Header from 'Components/Header/Header';
import Post from 'Components/Post/Post';

function BookPage() {
  const dispatch = useDispatch();
  const { spaceId, salonId, bookId } = useParams<{ spaceId?: string; salonId?: string; bookId: string }>();

  useEffect(() => {
    if (spaceId) {
      dispatch(requestGetBookSpace({ spaceId: parseInt(spaceId), bookId: parseInt(bookId) }));
    }
  });
  return (
    <>
      <Header />
      <S.Container>
        <S.PostWrapper></S.PostWrapper>
      </S.Container>
    </>
  );
}

export default BookPage;
