import React, { useEffect, useMemo } from 'react';
import * as S from './BookPageStyle';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetBook as requestGetBookInSpace } from 'Modules/space/spaceActions';
import { useParams } from 'react-router';
import SideBar from 'Components/SideBar/SideBar';
import Header from 'Components/Header/Header';
import Post from 'Components/Post/Post';
import { RootState } from 'Modules';

function BookPage() {
  const { book } = useSelector((state: RootState) => state.spaceReducer);
  const dispatch = useDispatch();
  const { spaceId, salonId, bookId } = useParams<{ spaceId?: string; salonId?: string; bookId: string }>();

  useEffect(() => {
    if (spaceId) {
      dispatch(requestGetBookInSpace({ spaceId: parseInt(spaceId), bookId: parseInt(bookId) }));
    }
  }, [bookId, dispatch, spaceId]);

  return (
    <>
      <Header />
      <S.Container>
        <S.ImgWrapper>
          <S.Img src={book?.thumbnail} />
        </S.ImgWrapper>
        <S.PostWrapper>
          <S.CategoryTitle>Review</S.CategoryTitle>
          {book?.reviews?.map((review) => (
            <Post key={review.id} type="review" review={review}></Post>
          ))}
          <S.CategoryTitle>Quote</S.CategoryTitle>
          {book?.quotes?.map((quote) => (
            <Post key={quote.id} type="quote" quote={quote}></Post>
          ))}
        </S.PostWrapper>
      </S.Container>
    </>
  );
}

export default BookPage;
