import { call, put, takeLatest } from 'redux-saga/effects';
import * as squareAPI from 'Apis/squareAPI';
import ActionTypes from './squareActionTypes';
import {
  requestGetAllReviewsFailure,
  requestGetAllReviewsSuccess,
  RequestGetAllReviewsSuccessActionPayload,
  requestGetAllQuotesFailure,
  requestGetAllQuotesSuccess,
  RequestGetAllQuotesSuccessActionPayload,
} from './squareActions';

function* requestGetAllReviewsSaga() {
  try {
    const response: RequestGetAllReviewsSuccessActionPayload = yield call(squareAPI.getAllReviews);
    yield put(requestGetAllReviewsSuccess(response));
  } catch (e) {
    yield put(requestGetAllReviewsFailure(e));
  }
}

function* requestGetAllQuotesSaga() {
  try {
    const response: RequestGetAllQuotesSuccessActionPayload = yield call(squareAPI.getAllQuotes);
    yield put(requestGetAllQuotesSuccess(response));
  } catch (e) {
    yield put(requestGetAllQuotesFailure(e));
  }
}

export default function* squareSaga() {
  yield takeLatest(ActionTypes.REQUEST_GET_ALL_REVIEWS, requestGetAllReviewsSaga);
  yield takeLatest(ActionTypes.REQUEST_GET_ALL_QUOTES, requestGetAllQuotesSaga);
}
