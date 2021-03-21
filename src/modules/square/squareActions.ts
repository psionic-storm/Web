import { Review } from 'Types/review';
import { Quote } from 'Types/quote';
import ActionTypes from './squareActionTypes';

export type SquareAction =
  | ReturnType<typeof requestGetAllReviewsSuccess>
  | ReturnType<typeof requestGetAllReviewsFailure>
  | ReturnType<typeof requestGetAllQuotesSuccess>
  | ReturnType<typeof requestGetAllQuotesFailure>;

export type RequestGetAllReviewsSuccessActionPayload = Review[];
export type RequestGetAllReviewsFailureActionPayload = Error;
export type RequestGetAllQuotesSuccessActionPayload = Quote[];
export type RequestGetAllQuotesFailureActionPayload = Error;

export function requestGetAllReviews() {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_REVIEWS,
  };
}

export function requestGetAllReviewsSuccess(reviews: RequestGetAllReviewsSuccessActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_REVIEWS_SUCCESS,
    payload: reviews,
  };
}

export function requestGetAllReviewsFailure(error: RequestGetAllReviewsFailureActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_REVIEWS_FAILURE,
    payload: { error },
  };
}

export function requestGetAllQuotes() {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_QUOTES,
  };
}

export function requestGetAllQuotesSuccess(quotes: RequestGetAllQuotesSuccessActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_QUOTES_SUCCESS,
    payload: quotes,
  };
}

export function requestGetAllQuotesFailure(error: RequestGetAllQuotesFailureActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_ALL_QUOTES_FAILURE,
    payload: { error },
  };
}
