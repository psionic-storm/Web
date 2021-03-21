import { Review } from 'Types/review';
import { Quote } from 'Types/quote';
import ActionTypes from './spaceActionTypes';

export type SpaceAction =
  | ReturnType<typeof requestGetSpaceSuccess>
  | ReturnType<typeof requestGetSpaceFailure>
  | ReturnType<typeof requestUpdateSpaceSuccess>
  | ReturnType<typeof requestUpdateSpaceFailure>
  | ReturnType<typeof requestGetBookSuccess>
  | ReturnType<typeof requestGetBookFailure>
  | ReturnType<typeof requestAddBookSuccess>
  | ReturnType<typeof requestAddBookFailure>
  | ReturnType<typeof requestDeleteBookSuccess>
  | ReturnType<typeof requestDeleteBookFailure>
  | ReturnType<typeof requestAddReviewSuccess>
  | ReturnType<typeof requestAddReviewFailure>
  | ReturnType<typeof requestUpdateReviewSuccess>
  | ReturnType<typeof requestUpdateReviewFailure>
  | ReturnType<typeof requestDeleteReviewSuccess>
  | ReturnType<typeof requestDeleteReviewFailure>
  | ReturnType<typeof requestGetAllReviewCommentsSuccess>
  | ReturnType<typeof requestGetAllReviewCommentsFailure>
  | ReturnType<typeof requestAddReviewCommentSuccess>
  | ReturnType<typeof requestAddReviewCommentFailure>
  | ReturnType<typeof requestUpdateReviewCommentSuccess>
  | ReturnType<typeof requestUpdateReviewCommentFailure>
  | ReturnType<typeof requestDeleteReviewCommentSuccess>
  | ReturnType<typeof requestDeleteReviewCommentFailure>
  | ReturnType<typeof requestAddQuoteSuccess>
  | ReturnType<typeof requestAddQuoteFailure>
  | ReturnType<typeof requestUpdateQuoteSuccess>
  | ReturnType<typeof requestUpdateQuoteFailure>
  | ReturnType<typeof requestDeleteQuoteSuccess>
  | ReturnType<typeof requestDeleteQuoteFailure>
  | ReturnType<typeof requestGetAllQuoteCommentsSuccess>
  | ReturnType<typeof requestGetAllQuoteCommentsFailure>
  | ReturnType<typeof requestAddQuoteCommentSuccess>
  | ReturnType<typeof requestAddQuoteCommentFailure>
  | ReturnType<typeof requestUpdateQuoteCommentSuccess>
  | ReturnType<typeof requestUpdateQuoteCommentFailure>
  | ReturnType<typeof requestDeleteQuoteCommentSuccess>
  | ReturnType<typeof requestDeleteQuoteCommentFailure>;

export type RequestGetSpaceActionPayload = { spaceId: number };
export type RequestUpdateSapceActionPayload = { spaceId: number; name: string };
export type RequestGetBookActionPayload = { spaceId: number; bookId: number };
export type RequestAddBookActionPayload = { spaceId: number; title: string; author: string; description: string };
export type RequestDeleteBookActionPayload = { spaceId: number; bookId: number };
export type RequestAddReviewActionPayload = { spaceId: number; bookId: number; title: string; content: string };
export type RequestUpdateReviewActionPayload = {
  spaceId: number;
  bookId: number;
  reviewId: number;
  title: string;
  content: string;
};
export type RequestDeleteReviewActionPayload = { spaceId: number; bookId: number; reviewId: number };
export type RequestGetAllReviewCommentsActionPayload = { spaceId: number; bookId: number; reviewId: number };
export type RequestAddReviewCommentActionPayload = {
  spaceId: number;
  bookId: number;
  reviewId: number;
  comment: string;
};
export type RequestUpdateReviewCommentActionPayload = {
  spaceId: number;
  bookId: number;
  reviewId: number;
  commentId: number;
  comment: string;
};
export type RequestDeleteReviewCommentActionPayload = {
  spaceId: number;
  bookId: number;
  reviewId: number;
  commentId: number;
};
export type RequestAddQuoteActionPayload = { spaceId: number; bookId: number; content: string; page: number };
export type RequestUpdateQuoteActionPayload = {
  spaceId: number;
  bookId: number;
  quoteId: number;
  content: string;
  page: number;
};
export type RequestDeleteQuoteActionPayload = { spaceId: number; bookId: number; quoteId: number };
export type RequestGetAllQuoteCommentsActionPayload = { spaceId: number; bookId: number; quoteId: number };
export type RequestAddQuoteCommentActionPayload = { spaceId: number; bookId: number; quoteId: number; comment: string };
export type RequestUpdateQuoteCommentActionPayload = {
  spaceId: number;
  bookId: number;
  quoteId: number;
  commentId: number;
  comment: string;
};
export type RequestDeleteQuoteCommentActionPayload = {
  spaceId: number;
  bookId: number;
  quoteId: number;
  commentId: number;
};

export type RequestGetSpaceSuccessActionPayload =
export type RequestUpdateSapceSuccessActionPayload =
export type RequestGetBookSuccessActionPayload =
export type RequestAddBookSuccessActionPayload =
export type RequestDeleteBookSuccessActionPayload =
export type RequestAddReviewSuccessActionPayload =
export type RequestUpdateReviewSuccessActionPayload =
export type RequestDeleteReviewSuccessActionPayload =
export type RequestGetAllReviewCommentsSuccessActionPayload =
export type RequestAddReviewCommentSuccessActionPayload =
export type RequestUpdateReviewCommentSuccessActionPayload =
export type RequestDeleteReviewCommentSuccessActionPayload =
export type RequestAddQuoteSuccessActionPayload =
export type RequestUpdateQuoteSuccessActionPayload =
export type RequestDeleteQuoteSuccessActionPayload =
export type RequestGetAllQuoteCommentsSuccessActionPayload =
export type RequestAddQuoteCommentSuccessActionPayload =
export type RequestUpdateQuoteCommentSuccessActionPayload =
export type RequestDeleteQuoteCommentSuccessActionPayload =

export function requestGetSpace({ spaceId }) {
  return <const>{
    type: ActionTypes.REQUEST_GET_SPACE,
    payload: { spaceId },
  };
}

export function requestGetSpaceSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_GET_SPACE_SUCCESS,
  };
}

export function requestGetSpaceFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_GET_SPACE_FAILURE,
    payload: { error },
  };
}

export function requestUpdateSpace({ spaceId, name }) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_SPACE,
    payload :
  };
}

export function requestUpdateSpaceSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_SPACE_SUCCESS,
  };
}

export function requestUpdateSpaceFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_SPACE_FAILURE,
    payload: { error },
  };
}

export function requestGetBook({ spaceId, bookId }) {
  return <const>{
    type: ActionTypes.REQUEST_GET_BOOK,
    payload :
  };
}

export function requestGetBookSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_GET_BOOK_SUCCESS,
  };
}

export function requestGetBookFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_GET_BOOK_FAILURE,
    payload: { error },
  };
}

export function requestAddBook({ spaceId, title, author, description }) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_BOOK,
    payload :
  };
}

export function requestAddBookSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_ADD_BOOK_SUCCESS,
  };
}

export function requestAddBookFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_BOOK_FAILURE,
    payload: { error },
  };
}

export function requestDeleteBook({ spaceId, bookId }) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_BOOK,
    payload :
  };
}

export function requestDeleteBookSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_BOOK_SUCCESS,
  };
}

export function requestDeleteBookFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_BOOK_FAILURE,
    payload: { error },
  };
}

export function requestAddReview({ spaceId, bookId, title, content }) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_REVIEW,
    payload :
  };
}

export function requestAddReviewSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_ADD_REVIEW_SUCCESS,
  };
}

export function requestAddReviewFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_REVIEW_FAILURE,
    payload: { error },
  };
}

export function requestUpdateReview({ spaceId, bookId, reviewId, title, content }) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_REVIEW,
    payload : { spaceId, bookId, reviewId, title, content }
  };
}

export function requestUpdateReviewSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_REVIEW_SUCCESS,
  };
}

export function requestUpdateReviewFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_REVIEW_FAILURE,
    payload: { error },
  };
}

export function requestDeleteReview({ spaceId, bookId, reviewId }) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_REVIEW,
    payload : { spaceId, bookId, reviewId }
  };
}

export function requestDeleteReviewSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_REVIEW_SUCCESS,
  };
}

export function requestDeleteReviewFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_REVIEW_FAILURE,
    payload: { error },
  };
}

export function requestGetAllReviewComments({ spaceId, bookId, reviewId }) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_REVIEW_COMMENTS,
    payload : { spaceId, bookId, reviewId }
  };
}

export function requestGetAllReviewCommentsSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_REVIEW_COMMENTS_SUCCESS,
  };
}

export function requestGetAllReviewCommentsFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_REVIEW_COMMENTS_FAILURE,
    payload: { error },
  };
}

export function requestAddReviewComment({ spaceId, bookId, reviewId, comment }) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_REVIEW_COMMENT,
    payload : { spaceId, bookId, reviewId, comment }
  };
}

export function requestAddReviewCommentSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_ADD_REVIEW_COMMENT_SUCCESS,
  };
}

export function requestAddReviewCommentFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_REVIEW_COMMENT_FAILURE,
    payload: { error },
  };
}

export function requestUpdateReviewComment({ spaceId, bookId, reviewId, commentId, comment }) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_REVIEW_COMMENT,
    payload : { spaceId, bookId, reviewId, commentId, comment }
  };
}

export function requestUpdateReviewCommentSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_REVIEW_COMMENT_SUCCESS,
  };
}

export function requestUpdateReviewCommentFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_REVIEW_COMMENT_FAILURE,
    payload: { error },
  };
}

export function requestDeleteReviewComment({ spaceId, bookId, reviewId, commentId }) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_REVIEW_COMMENT,
    payload : { spaceId, bookId, reviewId, commentId }
  };
}

export function requestDeleteReviewCommentSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_REVIEW_COMMENT_SUCCESS,
  };
}

export function requestDeleteReviewCommentFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_REVIEW_COMMENT_FAILURE,
    payload: { error },
  };
}

export function requestAddQuote({ spaceId, bookId, content, page }) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_QUOTE,
    payload : { spaceId, bookId, content, page }
  };
}

export function requestAddQuoteSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_ADD_QUOTE_SUCCESS,
  };
}

export function requestAddQuoteFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_QUOTE_FAILURE,
    payload: { error },
  };
}

export function requestUpdateQuote({ spaceId, bookId, quoteId, content, page }) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_QUOTE,
    payload : { spaceId, bookId, quoteId, content, page }
  };
}

export function requestUpdateQuoteSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_QUOTE_SUCCESS,
  };
}

export function requestUpdateQuoteFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_QUOTE_FAILURE,
    payload: { error },
  };
}

export function requestDeleteQuote({ spaceId, bookId, quoteId }) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_QUOTE,
    payload : { spaceId, bookId, quoteId }
  };
}

export function requestDeleteQuoteSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_QUOTE_SUCCESS,
  };
}

export function requestDeleteQuoteFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_QUOTE_FAILURE,
    payload: { error },
  };
}

export function requestGetAllQuoteComments({ spaceId, bookId, quoteId }) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_QUOTE_COMMENTS,
    payload : { spaceId, bookId, quoteId }
  };
}

export function requestGetAllQuoteCommentsSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_QUOTE_COMMENTS_SUCCESS,
  };
}

export function requestGetAllQuoteCommentsFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_QUOTE_COMMENTS_FAILURE,
    payload: { error },
  };
}

export function requestAddQuoteComment({ spaceId, bookId, quoteId, comment }) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_QUOTE_COMMENT,
    payload : { spaceId, bookId, quoteId, comment }
  };
}

export function requestAddQuoteCommentSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_ADD_QUOTE_COMMENT_SUCCESS,
  };
}

export function requestAddQuoteCommentFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_QUOTE_COMMENT_FAILURE,
    payload: { error },
  };
}

export function requestUpdateQuoteComment({ spaceId, bookId, quoteId, commentId, comment }) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_QUOTE_COMMENT,
    payload : { spaceId, bookId, quoteId, commentId, comment }
  };
}

export function requestUpdateQuoteCommentSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_QUOTE_COMMENT_SUCCESS,
  };
}

export function requestUpdateQuoteCommentFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_QUOTE_COMMENT_FAILURE,
    payload: { error },
  };
}

export function requestDeleteQuoteComment({ spaceId, bookId, quoteId, commentId }) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_QUOTE_COMMENT,
    payload : { spaceId, bookId, quoteId, commentId }
  };
}

export function requestDeleteQuoteCommentSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_QUOTE_COMMENT_SUCCESS,
  };
}

export function requestDeleteQuoteCommentFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_QUOTE_COMMENT_FAILURE,
    payload: { error },
  };
}
