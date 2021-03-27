import React, { useCallback, useEffect, useMemo, useState } from 'react';
import * as S from './BookPageStyle';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetBook as requestGetBookInSpace } from 'Modules/space/spaceActions';
import { useParams } from 'react-router';
import SideBar from 'Components/SideBar/SideBar';
import Header from 'Components/Header/Header';
import Post from 'Components/Post/Post';
import { RootState } from 'Modules';
import PostEditForm from 'Components/PostEditForm/PostEditForm';

function BookPage() {
  const { book } = useSelector((state: RootState) => state.spaceReducer);
  const dispatch = useDispatch();
  const { spaceId, salonId, bookId } = useParams<{ spaceId?: string; salonId?: string; bookId: string }>();
  const [addPostType, setAddPostType] = useState('');

  useEffect(() => {
    if (spaceId) {
      dispatch(requestGetBookInSpace({ spaceId: parseInt(spaceId), bookId: parseInt(bookId) }));
    }
  }, [bookId, dispatch, spaceId]);

  const handleClickAddPostBtn = useCallback((e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains('review')) {
      setAddPostType('review');
    }
    if (e.target.classList.contains('quote')) {
      setAddPostType('quote');
    }
  }, []);

  return (
    <>
      <Header />
      <S.Container>
        <S.ImgWrapper>
          <S.Img src={book?.thumbnail} />
        </S.ImgWrapper>
        <S.PostWrapper>
          <S.CategoryWrapper>
            <S.CategoryTitle>Review</S.CategoryTitle>
            <S.Button className="review" onClick={handleClickAddPostBtn}>
              Add Review
            </S.Button>
          </S.CategoryWrapper>
          {addPostType === 'review' && <PostEditForm type="review" />}
          {book?.reviews?.map((review) => (
            <Post key={review.id} type="review" review={review}></Post>
          ))}
          <S.CategoryWrapper>
            <S.CategoryTitle>Quote</S.CategoryTitle>
            <S.Button className="quote" onClick={handleClickAddPostBtn}>
              Add Quote
            </S.Button>
          </S.CategoryWrapper>
          {addPostType === 'quote' && <PostEditForm type="quote" />}
          {book?.quotes?.map((quote) => (
            <Post key={quote.id} type="quote" quote={quote}></Post>
          ))}
        </S.PostWrapper>
      </S.Container>
    </>
  );
}

export default BookPage;
