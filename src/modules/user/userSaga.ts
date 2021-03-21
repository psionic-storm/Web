import { call, put, takeLatest } from 'redux-saga/effects';
import * as userAPI from 'Apis/userAPI';
import ActionTypes from './userActionTypes';
import {
  requestSignUpSuccess,
  requestSignUpFailure,
  requestSignInSuccess,
  requestSignInFailure,
  RequestSignUpAction,
  RequestSignInAction,
  RequestSignUpSuccessActionPayload,
  RequestSignInSuccessActionPayload,
  requestGetCurrentUserSuccess,
  requestGetCurrentUserFailure,
  RequestGetCurrentUserSuccessActionPayload,
} from './userActions';

function* requestSignUpSaga({ payload }: RequestSignUpAction) {
  try {
    const response: RequestSignUpSuccessActionPayload = yield call(userAPI.signUp, payload);
    yield put(requestSignUpSuccess(response));
  } catch (e) {
    yield put(requestSignUpFailure(e));
  }
}

function* requestSignInSaga({ payload }: RequestSignInAction) {
  try {
    const response: RequestSignInSuccessActionPayload = yield call(userAPI.signIn, payload);
    yield put(requestSignInSuccess(response));
  } catch (e) {
    yield put(requestSignInFailure(e));
  }
}

function* requestGetCurrentUserSaga() {
  try {
    const response: RequestGetCurrentUserSuccessActionPayload = yield call(userAPI.getCurrentUser);
    yield put(requestGetCurrentUserSuccess(response));
  } catch (e) {
    yield put(requestGetCurrentUserFailure(e));
  }
}

export default function* userSaga() {
  yield takeLatest(ActionTypes.REQUEST_SIGN_UP, requestSignUpSaga);
  yield takeLatest(ActionTypes.REQUEST_SIGN_IN, requestSignInSaga);
  yield takeLatest(ActionTypes.REQUEST_GET_CURRENT_USER, requestGetCurrentUserSaga);
}
