import React, { useCallback, useEffect, useState } from 'react';
import * as S from './BookPageStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestAddQuote as requestAddQuoteInSpace,
  requestAddReview as requestAddReviewInSpace,
  requestDeleteReview as requestDeleteReviewInSpace,
  requestDeleteQuote as requestDeleteQuoteInSpace,
  requestUpdateReview as requestUpdateReviewInSpace,
  requestUpdateQuote as requestUpdateQuoteInSpace,
  requestGetBook as requestGetBookInSpace,
} from 'Modules/space/spaceActions';
import { useParams } from 'react-router';
import Header from 'Components/Header/Header';
import Post from 'Components/Post/Post';
import { RootState } from 'Modules';
import PostEditForm from 'Components/PostEditForm/PostEditForm';

function BookPage() {
  const {
    book,
    addedReviewId,
    addedQuoteId,
    reviewDeletedCount,
    quoteDeletedCount,
    reviewModifiedCount,
    quoteModifiedCount,
  } = useSelector((state: RootState) => state.spaceReducer);
  const dispatch = useDispatch();
  const params = useParams<{ spaceId?: string; salonId?: string; bookId: string }>();
  const spaceId = params.spaceId && parseInt(params.spaceId);
  const bookId = parseInt(params.bookId);
  const [addPostType, setAddPostType] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editType, setEditType] = useState('');
  const [editPostId, setEditPostId] = useState(null);

  useEffect(() => {
    if (spaceId) {
      dispatch(requestGetBookInSpace({ spaceId, bookId }));
      setAddPostType('');
    }
  }, [bookId, dispatch, spaceId, addedReviewId, addedQuoteId, reviewDeletedCount, quoteDeletedCount]);

  useEffect(() => {
    if (spaceId) {
      dispatch(requestGetBookInSpace({ spaceId, bookId }));
    }
    setEditMode(false);
  }, [dispatch, bookId, spaceId, reviewModifiedCount, quoteModifiedCount]);

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
    ({ type, id, title, page, content }) => {
      if (type === 'review' && spaceId) {
        editMode
          ? dispatch(requestUpdateReviewInSpace({ spaceId, bookId, reviewId: id, title, content }))
          : dispatch(requestAddReviewInSpace({ spaceId, bookId, title, content }));
      }
      if (type === 'quote' && spaceId) {
        editMode
          ? dispatch(requestUpdateQuoteInSpace({ spaceId, bookId, quoteId: id, page, content }))
          : dispatch(requestAddQuoteInSpace({ spaceId, bookId, page, content }));
      }
    },
    [dispatch, spaceId, bookId, editMode],
  );

  const handleClickDeletePost = useCallback(
    (type, id) => {
      if (type === 'review' && spaceId) {
        dispatch(requestDeleteReviewInSpace({ spaceId, bookId, reviewId: id }));
      }
      if (type === 'quote' && spaceId) {
        dispatch(requestDeleteQuoteInSpace({ spaceId, bookId, quoteId: id }));
      }
    },
    [dispatch, bookId, spaceId],
  );

  const handleClickEditBtn = useCallback((type, id) => {
    setEditMode(true);
    setEditPostId(id);
    if (type === 'review') {
      setEditType('review');
    }
    if (type === 'quote') {
      setEditType('quote');
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
          {addPostType === 'review' && (
            <PostEditForm
              type="review"
              handleClickCancelBtn={handleClickCancelBtn}
              handleClickSaveBtn={handleClickSaveBtn}
            />
          )}
          {book?.reviews?.map((review) => {
            if (editMode && editType === 'review' && review.id === editPostId) {
              return (
                <PostEditForm
                  key={review.id}
                  type="review"
                  review={review}
                  handleClickCancelBtn={handleClickCancelBtn}
                  handleClickSaveBtn={handleClickSaveBtn}
                ></PostEditForm>
              );
            }

            return (
              <Post
                key={review.id}
                type="review"
                review={review}
                handleClickDeletePost={handleClickDeletePost}
                // handleClickEditPost={handleClickEditPost}
                handleClickEditBtn={handleClickEditBtn}
              />
            );
          })}
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
          {book?.quotes?.map((quote) => {
            if (editMode && editType === 'quote' && quote.id === editPostId) {
              return (
                <PostEditForm
                  key={quote.id}
                  type="quote"
                  quote={quote}
                  handleClickCancelBtn={handleClickCancelBtn}
                  handleClickSaveBtn={handleClickSaveBtn}
                ></PostEditForm>
              );
            }
            return (
              <Post
                key={quote.id}
                type="quote"
                quote={quote}
                handleClickDeletePost={handleClickDeletePost}
                // handleClickEditPost={handleClickEditPost}
                handleClickEditBtn={handleClickEditBtn}
              />
            );
          })}
        </S.PostWrapper>
      </S.Container>
    </>
  );
}

export default BookPage;
