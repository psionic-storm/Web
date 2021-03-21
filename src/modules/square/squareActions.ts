import { Review } from 'Types/review';
import ActionTypes from './squareActionTypes';

export type SquareAction =
  | ReturnType<typeof requestGetAllReviewsSuccess>
  | ReturnType<typeof requestGetAllReviewsFailure>;

export type RequestGetAllReviewsSuccessActionPayload = Review[];
export type RequestGetAllReviewsFailureActionPayload = Error;

export function requestGetAllReviews() {
  return <const>{
    type: ActionTypes.REQUEST_GET_GET_ALL_REVIEWS,
  };
}

export function requestGetAllReviewsSuccess(reviews: RequestGetAllReviewsSuccessActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_GET_ALL_REVIEWS_SUCCESS,
    payload: reviews,
  };
}

export function requestGetAllReviewsFailure(error: RequestGetAllReviewsFailureActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_GET_GET_ALL_REVIEWS_FAILURE,
    payload: { error },
  };
}

// export function requestGetAllQuotes({ loginId, password }: RequestSignInActionPayload) {
//   return <const>{
//     type: ActionTypes.REQUEST_SIGN_IN,
//     payload: {
//       loginId,
//       password,
//     },
//   };
