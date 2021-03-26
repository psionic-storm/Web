import { RootState } from 'Modules';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  requestAddBook,
  requestAddQuote,
  requestAddQuoteComment,
  requestAddReview,
  requestAddReviewComment,
  requestDeleteBook,
  requestDeleteQuote,
  requestDeleteQuoteComment,
  requestDeleteReview,
  requestDeleteReviewComment,
  requestGetAllQuoteComments,
  requestGetAllReviewComments,
  requestGetBook,
  requestGetSpace,
  requestUpdateQuote,
  requestUpdateQuoteComment,
  requestUpdateReview,
  requestUpdateReviewComment,
  requestUpdateSpace,
} from 'Modules/space/spaceActions';

function useSpace() {
  const { error, space, book, comments } = useSelector((state: RootState) => state.spaceReducer);
  const dispatch = useDispatch();

  const getSpace = useCallback(
    ({ spaceId }) => {
      dispatch(requestGetSpace({ spaceId }));
    },
    [dispatch],
  );

  const updateSpace = useCallback(
    ({ spaceId, name }) => {
      dispatch(requestUpdateSpace({ spaceId, name }));
    },
    [dispatch],
  );

  const getBook = useCallback(
    ({ spaceId, bookId }) => {
      dispatch(requestGetBook({ spaceId, bookId }));
    },
    [dispatch],
  );

  const addBook = useCallback(
    ({ spaceId, title, author, description }) => {
      dispatch(requestAddBook({ spaceId, title, author, description }));
    },
    [dispatch],
  );

  const deleteBook = useCallback(
    ({ spaceId, bookId }) => {
      dispatch(requestDeleteBook({ spaceId, bookId }));
    },
    [dispatch],
  );

  const addReview = useCallback(
    ({ spaceId, bookId, title, content }) => {
      dispatch(requestAddReview({ spaceId, bookId, title, content }));
    },
    [dispatch],
  );

  const updateReview = useCallback(
    ({ spaceId, bookId, reviewId, title, content }) => {
      dispatch(requestUpdateReview({ spaceId, bookId, reviewId, title, content }));
    },
    [dispatch],
  );

  const deleteReview = useCallback(
    ({ spaceId, bookId, reviewId }) => {
      dispatch(requestDeleteReview({ spaceId, bookId, reviewId }));
    },
    [dispatch],
  );

  const getAllReviewComments = useCallback(
    ({ spaceId, bookId, reviewId }) => {
      dispatch(requestGetAllReviewComments({ spaceId, bookId, reviewId }));
    },
    [dispatch],
  );

  const addReviewComment = useCallback(
    ({ spaceId, bookId, reviewId, comment }) => {
      dispatch(requestAddReviewComment({ spaceId, bookId, reviewId, comment }));
    },
    [dispatch],
  );

  const updateReviewComment = useCallback(
    ({ spaceId, bookId, reviewId, commentId, comment }) => {
      dispatch(requestUpdateReviewComment({ spaceId, bookId, reviewId, commentId, comment }));
    },
    [dispatch],
  );

  const deleteReviewComment = useCallback(
    ({ spaceId, bookId, reviewId, commentId }) => {
      dispatch(requestDeleteReviewComment({ spaceId, bookId, reviewId, commentId }));
    },
    [dispatch],
  );

  const addQuote = useCallback(
    ({ spaceId, bookId, content, page }) => {
      dispatch(requestAddQuote({ spaceId, bookId, content, page }));
    },
    [dispatch],
  );

  const updateQuote = useCallback(
    ({ spaceId, bookId, quoteId, content, page }) => {
      dispatch(requestUpdateQuote({ spaceId, bookId, quoteId, content, page }));
    },
    [dispatch],
  );

  const deleteQuote = useCallback(
    ({ spaceId, bookId, quoteId }) => {
      dispatch(requestDeleteQuote({ spaceId, bookId, quoteId }));
    },
    [dispatch],
  );

  const getAllQuoteComments = useCallback(
    ({ spaceId, bookId, quoteId }) => {
      dispatch(requestGetAllQuoteComments({ spaceId, bookId, quoteId }));
    },
    [dispatch],
  );

  const addQuoteComment = useCallback(
    ({ spaceId, bookId, quoteId, comment }) => {
      dispatch(requestAddQuoteComment({ spaceId, bookId, quoteId, comment }));
    },
    [dispatch],
  );

  const updateQuoteComment = useCallback(
    ({ spaceId, bookId, quoteId, commentId, comment }) => {
      dispatch(requestUpdateQuoteComment({ spaceId, bookId, quoteId, commentId, comment }));
    },
    [dispatch],
  );

  const deleteQuoteComment = useCallback(
    ({ spaceId, bookId, quoteId, commentId }) => {
      dispatch(requestDeleteQuoteComment({ spaceId, bookId, quoteId, commentId }));
    },
    [dispatch],
  );

  return {
    error,
    space,
    book,
    comments,
    getSpace,
    updateSpace,
    getBook,
    addBook,
    deleteBook,
    addReview,
    updateReview,
    deleteReview,
    getAllReviewComments,
    addReviewComment,
    updateReviewComment,
    deleteReviewComment,
    addQuote,
    updateQuote,
    deleteQuote,
    getAllQuoteComments,
    addQuoteComment,
    updateQuoteComment,
    deleteQuoteComment,
  };
}

export default useSpace;
