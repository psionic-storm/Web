import ActionTypes from './salonActionTypes';
import { Salon } from 'Types/salon';
import { Book } from 'Types/book';
import { Comment } from 'Types/comment';

export type SalonAction =
  | ReturnType<typeof requestGetSalonSuccess>
  | ReturnType<typeof requestGetSalonFailure>
  | ReturnType<typeof requestAddSalonSuccess>
  | ReturnType<typeof requestAddSalonFailure>
  | ReturnType<typeof requestUpdateSalonSuccess>
  | ReturnType<typeof requestUpdateSalonFailure>
  | ReturnType<typeof requestDeleteSalonSuccess>
  | ReturnType<typeof requestDeleteSalonFailure>
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

export type RequestGetSalonAction = ReturnType<typeof requestGetSalon>;
export type RequestAddSalonAction = ReturnType<typeof requestAddSalon>;
export type RequestUpdateSalonAction = ReturnType<typeof requestUpdateSalon>;
export type RequestDeleteSalonAction = ReturnType<typeof requestDeleteSalon>;
export type RequestGetBookAction = ReturnType<typeof requestGetBook>;
export type RequestAddBookAction = ReturnType<typeof requestAddBook>;
export type RequestDeleteBookAction = ReturnType<typeof requestDeleteBook>;
export type RequestAddReviewAction = ReturnType<typeof requestAddReview>;
export type RequestUpdateReviewAction = ReturnType<typeof requestUpdateReview>;
export type RequestDeleteReviewAction = ReturnType<typeof requestDeleteReview>;
export type RequestGetAllReviewCommentsAction = ReturnType<typeof requestGetAllReviewComments>;
export type RequestAddReviewCommentAction = ReturnType<typeof requestAddReviewComment>;
export type RequestUpdateReviewCommentAction = ReturnType<typeof requestUpdateReviewComment>;
export type RequestDeleteReviewCommentAction = ReturnType<typeof requestDeleteReviewComment>;
export type RequestAddQuoteAction = ReturnType<typeof requestAddQuote>;
export type RequestUpdateQuoteAction = ReturnType<typeof requestUpdateQuote>;
export type RequestDeleteQuoteAction = ReturnType<typeof requestDeleteQuote>;
export type RequestGetAllQuoteCommentsAction = ReturnType<typeof requestGetAllQuoteComments>;
export type RequestAddQuoteCommentAction = ReturnType<typeof requestAddQuoteComment>;
export type RequestUpdateQuoteCommentAction = ReturnType<typeof requestUpdateQuoteComment>;
export type RequestDeleteQuoteCommentAction = ReturnType<typeof requestDeleteQuoteComment>;

export type RequestGetSalonActionPayload = { salonId: number };
export type RequestAddSalonActionPayload = { salonId: number; name: string };
export type RequestUpdateSalonActionPayload = { salonId: number; name: string };
export type RequestDeleteSalonActionPayload = { salonId: number };
export type RequestGetBookActionPayload = { salonId: number; bookId: number };
export type RequestAddBookActionPayload = { salonId: number; title: string; author: string; description: string };
export type RequestDeleteBookActionPayload = { salonId: number; bookId: number };
export type RequestAddReviewActionPayload = { salonId: number; bookId: number; title: string; content: string };
export type RequestUpdateReviewActionPayload = {
  salonId: number;
  bookId: number;
  reviewId: number;
  title: string;
  content: string;
};
export type RequestDeleteReviewActionPayload = { salonId: number; bookId: number; reviewId: number };
export type RequestGetAllReviewCommentsActionPayload = { salonId: number; bookId: number; reviewId: number };
export type RequestAddReviewCommentActionPayload = {
  salonId: number;
  bookId: number;
  reviewId: number;
  comment: string;
};
export type RequestUpdateReviewCommentActionPayload = {
  salonId: number;
  bookId: number;
  reviewId: number;
  commentId: number;
  comment: string;
};
export type RequestDeleteReviewCommentActionPayload = {
  salonId: number;
  bookId: number;
  reviewId: number;
  commentId: number;
};
export type RequestAddQuoteActionPayload = { salonId: number; bookId: number; content: string; page: number };
export type RequestUpdateQuoteActionPayload = {
  salonId: number;
  bookId: number;
  quoteId: number;
  content: string;
  page: number;
};
export type RequestDeleteQuoteActionPayload = { salonId: number; bookId: number; quoteId: number };
export type RequestGetAllQuoteCommentsActionPayload = { salonId: number; bookId: number; quoteId: number };
export type RequestAddQuoteCommentActionPayload = { salonId: number; bookId: number; quoteId: number; comment: string };
export type RequestUpdateQuoteCommentActionPayload = {
  salonId: number;
  bookId: number;
  quoteId: number;
  commentId: number;
  comment: string;
};
export type RequestDeleteQuoteCommentActionPayload = {
  salonId: number;
  bookId: number;
  quoteId: number;
  commentId: number;
};

export type RequestGetSalonSuccessActionPayload = Salon;
export type RequestAddSalonSuccessActionPayload = { message: string };
export type RequestUpdateSalonSuccessActionPayload = { message: string };
export type RequestDeleteSalonSuccessActionPayload = { message: string };
export type RequestGetBookSuccessActionPayload = Book;
export type RequestAddBookSuccessActionPayload = number;
export type RequestDeleteBookSuccessActionPayload = { message: string };
export type RequestAddReviewSuccessActionPayload = number;
export type RequestUpdateReviewSuccessActionPayload = { message: string };
export type RequestDeleteReviewSuccessActionPayload = { message: string };
export type RequestGetAllReviewCommentsSuccessActionPayload = Comment[];
export type RequestAddReviewCommentSuccessActionPayload = number;
export type RequestUpdateReviewCommentSuccessActionPayload = { message: string };
export type RequestDeleteReviewCommentSuccessActionPayload = { message: string };
export type RequestAddQuoteSuccessActionPayload = number;
export type RequestUpdateQuoteSuccessActionPayload = { message: string };
export type RequestDeleteQuoteSuccessActionPayload = { message: string };
export type RequestGetAllQuoteCommentsSuccessActionPayload = Comment[];
export type RequestAddQuoteCommentSuccessActionPayload = number;
export type RequestUpdateQuoteCommentSuccessActionPayload = { message: string };
export type RequestDeleteQuoteCommentSuccessActionPayload = { message: string };

export function requestGetSalon({ salonId }: RequestGetSalonActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_SALON,
    payload: { salonId },
  };
}

export function requestGetSalonSuccess(payload: RequestGetSalonSuccessActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_SALON_SUCCESS,
    payload,
  };
}

export function requestGetSalonFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_GET_SALON_FAILURE,
    payload: { error },
  };
}

export function requestAddSalon({ salonId, name }: RequestAddSalonActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_SALON,
    payload: { salonId, name },
  };
}

export function requestAddSalonSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_ADD_SALON_SUCCESS,
  };
}

export function requestAddSalonFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_SALON_FAILURE,
    payload: { error },
  };
}

export function requestDeleteSalon({ salonId }: RequestDeleteSalonActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_SALON,
    payload: { salonId },
  };
}

export function requestDeleteSalonSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_SALON_SUCCESS,
  };
}

export function requestDeleteSalonFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_SALON_FAILURE,
    payload: { error },
  };
}

export function requestUpdateSalon({ salonId, name }: RequestUpdateSalonActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_SALON,
    payload: { salonId, name },
  };
}

export function requestUpdateSalonSuccess() {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_SALON_SUCCESS,
  };
}

export function requestUpdateSalonFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_SALON_FAILURE,
    payload: { error },
  };
}

export function requestGetBook({ salonId, bookId }: RequestGetBookActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_BOOK,
    payload: { salonId, bookId },
  };
}

export function requestGetBookSuccess(payload: RequestGetBookSuccessActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_BOOK_SUCCESS,
    payload,
  };
}

export function requestGetBookFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_GET_BOOK_FAILURE,
    payload: { error },
  };
}

export function requestAddBook({ salonId, title, author, description }: RequestAddBookActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_BOOK,
    payload: { salonId, title, author, description },
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

export function requestDeleteBook({ salonId, bookId }: RequestDeleteBookActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_BOOK,
    payload: { salonId, bookId },
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

export function requestAddReview({ salonId, bookId, title, content }: RequestAddReviewActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_REVIEW,
    payload: { salonId, bookId, title, content },
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

export function requestUpdateReview({ salonId, bookId, reviewId, title, content }: RequestUpdateReviewActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_REVIEW,
    payload: { salonId, bookId, reviewId, title, content },
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

export function requestDeleteReview({ salonId, bookId, reviewId }: RequestDeleteReviewActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_REVIEW,
    payload: { salonId, bookId, reviewId },
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

export function requestGetAllReviewComments({ salonId, bookId, reviewId }: RequestGetAllReviewCommentsActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_REVIEW_COMMENTS,
    payload: { salonId, bookId, reviewId },
  };
}

export function requestGetAllReviewCommentsSuccess(payload: RequestGetAllReviewCommentsSuccessActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_REVIEW_COMMENTS_SUCCESS,
    payload,
  };
}

export function requestGetAllReviewCommentsFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_REVIEW_COMMENTS_FAILURE,
    payload: { error },
  };
}

export function requestAddReviewComment({ salonId, bookId, reviewId, comment }: RequestAddReviewCommentActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_REVIEW_COMMENT,
    payload: { salonId, bookId, reviewId, comment },
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

export function requestUpdateReviewComment({
  salonId,
  bookId,
  reviewId,
  commentId,
  comment,
}: RequestUpdateReviewCommentActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_REVIEW_COMMENT,
    payload: { salonId, bookId, reviewId, commentId, comment },
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

export function requestDeleteReviewComment({
  salonId,
  bookId,
  reviewId,
  commentId,
}: RequestDeleteReviewCommentActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_REVIEW_COMMENT,
    payload: { salonId, bookId, reviewId, commentId },
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

export function requestAddQuote({ salonId, bookId, content, page }: RequestAddQuoteActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_QUOTE,
    payload: { salonId, bookId, content, page },
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

export function requestUpdateQuote({ salonId, bookId, quoteId, content, page }: RequestUpdateQuoteActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_QUOTE,
    payload: { salonId, bookId, quoteId, content, page },
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

export function requestDeleteQuote({ salonId, bookId, quoteId }: RequestDeleteQuoteActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_QUOTE,
    payload: { salonId, bookId, quoteId },
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

export function requestGetAllQuoteComments({ salonId, bookId, quoteId }: RequestGetAllQuoteCommentsActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_QUOTE_COMMENTS,
    payload: { salonId, bookId, quoteId },
  };
}

export function requestGetAllQuoteCommentsSuccess(payload: RequestGetAllQuoteCommentsSuccessActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_QUOTE_COMMENTS_SUCCESS,
    payload,
  };
}

export function requestGetAllQuoteCommentsFailure(error: Error) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_QUOTE_COMMENTS_FAILURE,
    payload: { error },
  };
}

export function requestAddQuoteComment({ salonId, bookId, quoteId, comment }: RequestAddQuoteCommentActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_ADD_QUOTE_COMMENT,
    payload: { salonId, bookId, quoteId, comment },
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

export function requestUpdateQuoteComment({
  salonId,
  bookId,
  quoteId,
  commentId,
  comment,
}: RequestUpdateQuoteCommentActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_UPDATE_QUOTE_COMMENT,
    payload: { salonId, bookId, quoteId, commentId, comment },
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

export function requestDeleteQuoteComment({
  salonId,
  bookId,
  quoteId,
  commentId,
}: RequestDeleteQuoteCommentActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_DELETE_QUOTE_COMMENT,
    payload: { salonId, bookId, quoteId, commentId },
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
