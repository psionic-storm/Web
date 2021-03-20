import { call, put, takeLatest } from 'redux-saga/effects';
import * as userAPI from 'Apis/userAPI';
import ActionTypes from './userActionTypes';
import {
  requestSignUpSuccess,
  requestSignUpFailure,
  RequestSignUpAction,
  RequestSignUpSuccessActionPayload,
} from './userActions';

function* requestSignUpSaga({ payload }: RequestSignUpAction) {
  try {
    const response: RequestSignUpSuccessActionPayload = yield call(userAPI.signUp, payload);
    yield put(requestSignUpSuccess(response));
  } catch (e) {
    yield put(requestSignUpFailure(e));
  }
}

export default function* userSaga() {
  yield takeLatest(ActionTypes.REQUEST_SIGN_UP, requestSignUpSaga);
}
