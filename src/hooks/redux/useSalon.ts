import { RootState } from 'Modules';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  requestAddBook,
  requestAddQuote,
  requestAddQuoteComment,
  requestAddReview,
  requestAddReviewComment,
  requestAddSalon,
  requestDeleteBook,
  requestDeleteQuote,
  requestDeleteQuoteComment,
  requestDeleteReview,
  requestDeleteReviewComment,
  requestDeleteSalon,
  requestGetAllQuoteComments,
  requestGetAllReviewComments,
  requestGetBook,
  requestGetSalon,
  requestUpdateQuote,
  requestUpdateQuoteComment,
  requestUpdateReview,
  requestUpdateReviewComment,
  requestUpdateSalon,
} from 'Modules/salon/salonActions';

function useSalon() {
  const { error, salon, book, comments } = useSelector((state: RootState) => state.salonReducer);
  const dispatch = useDispatch();

  const getSalon = useCallback(
    ({ salonId }) => {
      dispatch(requestGetSalon({ salonId }));
    },
    [dispatch],
  );

  const addSalon = useCallback(
    ({ salonId, name }) => {
      dispatch(requestAddSalon({ salonId, name }));
    },
    [dispatch],
  );

  const updateSalon = useCallback(
    ({ salonId, name }) => {
      dispatch(requestUpdateSalon({ salonId, name }));
    },
    [dispatch],
  );

  const deleteSalon = useCallback(
    ({ salonId }) => {
      dispatch(requestDeleteSalon({ salonId }));
    },
    [dispatch],
  );

  const getBook = useCallback(
    ({ salonId, bookId }) => {
      dispatch(requestGetBook({ salonId, bookId }));
    },
    [dispatch],
  );

  const addBook = useCallback(
    ({ salonId, title, author, description }) => {
      dispatch(requestAddBook({ salonId, title, author, description }));
    },
    [dispatch],
  );

  const deleteBook = useCallback(
    ({ salonId, bookId }) => {
      dispatch(requestDeleteBook({ salonId, bookId }));
    },
    [dispatch],
  );

  const addReview = useCallback(
    ({ salonId, bookId, title, content }) => {
      dispatch(requestAddReview({ salonId, bookId, title, content }));
    },
    [dispatch],
  );

  const updateReview = useCallback(
    ({ salonId, bookId, reviewId, title, content }) => {
      dispatch(requestUpdateReview({ salonId, bookId, reviewId, title, content }));
    },
    [dispatch],
  );

  const deleteReview = useCallback(
    ({ salonId, bookId, reviewId }) => {
      dispatch(requestDeleteReview({ salonId, bookId, reviewId }));
    },
    [dispatch],
  );

  const getAllReviewComments = useCallback(
    ({ salonId, bookId, reviewId }) => {
      dispatch(requestGetAllReviewComments({ salonId, bookId, reviewId }));
    },
    [dispatch],
  );

  const addReviewComment = useCallback(
    ({ salonId, bookId, reviewId, comment }) => {
      dispatch(requestAddReviewComment({ salonId, bookId, reviewId, comment }));
    },
    [dispatch],
  );

  const updateReviewComment = useCallback(
    ({ salonId, bookId, reviewId, commentId, comment }) => {
      dispatch(requestUpdateReviewComment({ salonId, bookId, reviewId, commentId, comment }));
    },
    [dispatch],
  );

  const deleteReviewComment = useCallback(
    ({ salonId, bookId, reviewId, commentId }) => {
      dispatch(requestDeleteReviewComment({ salonId, bookId, reviewId, commentId }));
    },
    [dispatch],
  );

  const addQuote = useCallback(
    ({ salonId, bookId, content, page }) => {
      dispatch(requestAddQuote({ salonId, bookId, content, page }));
    },
    [dispatch],
  );

  const updateQuote = useCallback(
    ({ salonId, bookId, quoteId, content, page }) => {
      dispatch(requestUpdateQuote({ salonId, bookId, quoteId, content, page }));
    },
    [dispatch],
  );

  const deleteQuote = useCallback(
    ({ salonId, bookId, quoteId }) => {
      dispatch(requestDeleteQuote({ salonId, bookId, quoteId }));
    },
    [dispatch],
  );

  const getAllQuoteComments = useCallback(
    ({ salonId, bookId, quoteId }) => {
      dispatch(requestGetAllQuoteComments({ salonId, bookId, quoteId }));
    },
    [dispatch],
  );

  const addQuoteComment = useCallback(
    ({ salonId, bookId, quoteId, comment }) => {
      dispatch(requestAddQuoteComment({ salonId, bookId, quoteId, comment }));
    },
    [dispatch],
  );

  const updateQuoteComment = useCallback(
    ({ salonId, bookId, quoteId, commentId, comment }) => {
      dispatch(requestUpdateQuoteComment({ salonId, bookId, quoteId, commentId, comment }));
    },
    [dispatch],
  );

  const deleteQuoteComment = useCallback(
    ({ salonId, bookId, quoteId, commentId }) => {
      dispatch(requestDeleteQuoteComment({ salonId, bookId, quoteId, commentId }));
    },
    [dispatch],
  );

  return {
    error,
    salon,
    book,
    comments,
    getSalon,
    addSalon,
    updateSalon,
    deleteSalon,
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

export default useSalon;
