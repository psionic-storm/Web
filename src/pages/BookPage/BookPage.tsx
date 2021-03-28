import React, { useCallback, useEffect, useState } from 'react';
import * as S from './BookPageStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestAddQuote as requestAddQuoteInSpace,
  requestAddReview as requestAddReviewInSpace,
  requestGetBook as requestGetBookInSpace,
} from 'Modules/space/spaceActions';
import { useParams } from 'react-router';
import Header from 'Components/Header/Header';
import Post from 'Components/Post/Post';
import { RootState } from 'Modules';
import PostEditForm from 'Components/PostEditForm/PostEditForm';

function BookPage() {
  const { book, addedReviewId } = useSelector((state: RootState) => state.spaceReducer);
  const dispatch = useDispatch();
  const params = useParams<{ spaceId?: string; salonId?: string; bookId: string }>();
  const spaceId = params.spaceId && parseInt(params.spaceId);
  const bookId = parseInt(params.bookId);
  const [addPostType, setAddPostType] = useState('');

  useEffect(() => {
    if (spaceId) {
      dispatch(requestGetBookInSpace({ spaceId, bookId }));
      setAddPostType('');
    }
  }, [bookId, dispatch, spaceId, addedReviewId]);

  const handleClickAddPostBtn = useCallback((e) => {
    if (e.target.classList.contains('review')) {
      setAddPostType('review');
    }
    if (e.target.classList.contains('quote')) {
      setAddPostType('quote');
    }
  }, []);

  const handleClickCancelBtn = useCallback(() => {
    setAddPostType('');
  }, []);

  const handleClickSaveBtn = useCallback(
    ({ type, title, page, content }) => {
      if (type === 'review' && spaceId) {
        dispatch(requestAddReviewInSpace({ spaceId, bookId, title, content }));
      }
      if (type === 'quote' && spaceId) {
        dispatch(requestAddQuoteInSpace({ spaceId, bookId, page, content }));
      }
    },
    [dispatch, spaceId, bookId],
  );

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
          {addPostType === 'review' && (
            <PostEditForm
              type="review"
              handleClickCancelBtn={handleClickCancelBtn}
              handleClickSaveBtn={handleClickSaveBtn}
            />
          )}
          {book?.reviews?.map((review) => (
            <Post key={review.id} type="review" review={review}></Post>
          ))}
          <S.CategoryWrapper>
            <S.CategoryTitle>Quote</S.CategoryTitle>
            <S.Button className="quote" onClick={handleClickAddPostBtn}>
              Add Quote
            </S.Button>
          </S.CategoryWrapper>
          {addPostType === 'quote' && (
            <PostEditForm
              type="quote"
              handleClickCancelBtn={handleClickCancelBtn}
              handleClickSaveBtn={handleClickSaveBtn}
            />
          )}
          {book?.quotes?.map((quote) => (
            <Post key={quote.id} type="quote" quote={quote}></Post>
          ))}
        </S.PostWrapper>
      </S.Container>
    </>
  );
}

export default BookPage;
