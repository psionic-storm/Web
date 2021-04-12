/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from 'redux-saga/effects';
import * as salonAPI from 'Apis/salonAPI';
import ActionTypes from './salonActionTypes';
import {
  RequestGetSalonAction,
  RequestAddSalonAction,
  RequestUpdateSalonAction,
  RequestDeleteSalonAction,
  RequestGetBookAction,
  RequestAddBookAction,
  RequestDeleteBookAction,
  RequestAddReviewAction,
  RequestUpdateReviewAction,
  RequestDeleteReviewAction,
  RequestGetAllReviewCommentsAction,
  RequestAddReviewCommentAction,
  RequestUpdateReviewCommentAction,
  RequestDeleteReviewCommentAction,
  RequestAddQuoteAction,
  RequestUpdateQuoteAction,
  RequestDeleteQuoteAction,
  RequestGetAllQuoteCommentsAction,
  RequestAddQuoteCommentAction,
  RequestUpdateQuoteCommentAction,
  RequestDeleteQuoteCommentAction,
  RequestGetSalonSuccessActionPayload,
  RequestAddSalonSuccessActionPayload,
  RequestUpdateSalonSuccessActionPayload,
  RequestDeleteSalonSuccessActionPayload,
  RequestGetBookSuccessActionPayload,
  RequestAddBookSuccessActionPayload,
  RequestDeleteBookSuccessActionPayload,
  RequestAddReviewSuccessActionPayload,
  RequestUpdateReviewSuccessActionPayload,
  RequestDeleteReviewSuccessActionPayload,
  RequestGetAllReviewCommentsSuccessActionPayload,
  RequestAddReviewCommentSuccessActionPayload,
  RequestUpdateReviewCommentSuccessActionPayload,
  RequestDeleteReviewCommentSuccessActionPayload,
  RequestAddQuoteSuccessActionPayload,
  RequestUpdateQuoteSuccessActionPayload,
  RequestDeleteQuoteSuccessActionPayload,
  RequestGetAllQuoteCommentsSuccessActionPayload,
  RequestAddQuoteCommentSuccessActionPayload,
  RequestUpdateQuoteCommentSuccessActionPayload,
  RequestDeleteQuoteCommentSuccessActionPayload,
  requestGetSalonSuccess,
  requestGetSalonFailure,
  requestAddSalonSuccess,
  requestAddSalonFailure,
  requestUpdateSalonSuccess,
  requestUpdateSalonFailure,
  requestDeleteSalonSuccess,
  requestDeleteSalonFailure,
  requestGetBookSuccess,
  requestGetBookFailure,
  requestAddBookSuccess,
  requestAddBookFailure,
  requestDeleteBookSuccess,
  requestDeleteBookFailure,
  requestAddReviewSuccess,
  requestAddReviewFailure,
  requestUpdateReviewSuccess,
  requestUpdateReviewFailure,
  requestDeleteReviewSuccess,
  requestDeleteReviewFailure,
  requestGetAllReviewCommentsSuccess,
  requestGetAllReviewCommentsFailure,
  requestAddReviewCommentSuccess,
  requestAddReviewCommentFailure,
  requestUpdateReviewCommentSuccess,
  requestUpdateReviewCommentFailure,
  requestDeleteReviewCommentSuccess,
  requestDeleteReviewCommentFailure,
  requestAddQuoteSuccess,
  requestAddQuoteFailure,
  requestUpdateQuoteSuccess,
  requestUpdateQuoteFailure,
  requestDeleteQuoteSuccess,
  requestDeleteQuoteFailure,
  requestGetAllQuoteCommentsSuccess,
  requestGetAllQuoteCommentsFailure,
  requestAddQuoteCommentSuccess,
  requestAddQuoteCommentFailure,
  requestUpdateQuoteCommentSuccess,
  requestUpdateQuoteCommentFailure,
  requestDeleteQuoteCommentSuccess,
  requestDeleteQuoteCommentFailure,
} from './salonActions';

function* requestGetSalonSaga({ payload }: RequestGetSalonAction) {
  try {
    const response: RequestGetSalonSuccessActionPayload = yield call(salonAPI.getSalon, payload);
    yield put(requestGetSalonSuccess(response));
  } catch (e) {
    yield put(requestGetSalonFailure(e));
  }
}

function* requestAddSalonSaga({ payload }: RequestAddSalonAction) {
  try {
    const response: RequestAddSalonSuccessActionPayload = yield call(salonAPI.addSalon, payload);
    yield put(requestAddSalonSuccess());
  } catch (e) {
    yield put(requestAddSalonFailure(e));
  }
}

function* requestUpdateSalonSaga({ payload }: RequestUpdateSalonAction) {
  try {
    const response: RequestUpdateSalonSuccessActionPayload = yield call(salonAPI.updateSalon, payload);
    yield put(requestUpdateSalonSuccess());
  } catch (e) {
    yield put(requestUpdateSalonFailure(e));
  }
}

function* requestDeleteSalonSaga({ payload }: RequestDeleteSalonAction) {
  try {
    const response: RequestDeleteSalonSuccessActionPayload = yield call(salonAPI.deleteSalon, payload);
    yield put(requestDeleteSalonSuccess());
  } catch (e) {
    yield put(requestDeleteSalonFailure(e));
  }
}

function* requestGetBookSaga({ payload }: RequestGetBookAction) {
  try {
    const response: RequestGetBookSuccessActionPayload = yield call(salonAPI.getBook, payload);
    yield put(requestGetBookSuccess(response));
  } catch (e) {
    yield put(requestGetBookFailure(e));
  }
}

function* requestAddBookSaga({ payload }: RequestAddBookAction) {
  try {
    const response: RequestAddBookSuccessActionPayload = yield call(salonAPI.addBook, payload);
    yield put(requestAddBookSuccess());
  } catch (e) {
    yield put(requestAddBookFailure(e));
  }
}

function* requestDeleteBookSaga({ payload }: RequestDeleteBookAction) {
  try {
    const response: RequestDeleteBookSuccessActionPayload = yield call(salonAPI.deleteBook, payload);
    yield put(requestDeleteBookSuccess());
  } catch (e) {
    yield put(requestDeleteBookFailure(e));
  }
}

function* requestAddReviewSaga({ payload }: RequestAddReviewAction) {
  try {
    const response: RequestAddReviewSuccessActionPayload = yield call(salonAPI.addReview, payload);
    yield put(requestAddReviewSuccess());
  } catch (e) {
    yield put(requestAddReviewFailure(e));
  }
}

function* requestUpdateReviewSaga({ payload }: RequestUpdateReviewAction) {
  try {
    const response: RequestUpdateReviewSuccessActionPayload = yield call(salonAPI.updateReview, payload);
    yield put(requestUpdateReviewSuccess());
  } catch (e) {
    yield put(requestUpdateReviewFailure(e));
  }
}

function* requestDeleteReviewSaga({ payload }: RequestDeleteReviewAction) {
  try {
    const response: RequestDeleteReviewSuccessActionPayload = yield call(salonAPI.deleteReview, payload);
    yield put(requestDeleteReviewSuccess());
  } catch (e) {
    yield put(requestDeleteReviewFailure(e));
  }
}

function* requestGetAllReviewCommentsSaga({ payload }: RequestGetAllReviewCommentsAction) {
  try {
    const response: RequestGetAllReviewCommentsSuccessActionPayload = yield call(
      salonAPI.getAllReviewComments,
      payload,
    );
    yield put(requestGetAllReviewCommentsSuccess(response));
  } catch (e) {
    yield put(requestGetAllReviewCommentsFailure(e));
  }
}

function* requestAddReviewCommentSaga({ payload }: RequestAddReviewCommentAction) {
  try {
    const response: RequestAddReviewCommentSuccessActionPayload = yield call(salonAPI.addReviewComment, payload);
    yield put(requestAddReviewCommentSuccess());
  } catch (e) {
    yield put(requestAddReviewCommentFailure(e));
  }
}

function* requestUpdateReviewCommentSaga({ payload }: RequestUpdateReviewCommentAction) {
  try {
    const response: RequestUpdateReviewCommentSuccessActionPayload = yield call(salonAPI.updateReviewComment, payload);
    yield put(requestUpdateReviewCommentSuccess());
  } catch (e) {
    yield put(requestUpdateReviewCommentFailure(e));
  }
}

function* requestDeleteReviewCommentSaga({ payload }: RequestDeleteReviewCommentAction) {
  try {
    const response: RequestDeleteReviewCommentSuccessActionPayload = yield call(salonAPI.deleteReviewComment, payload);
    yield put(requestDeleteReviewCommentSuccess());
  } catch (e) {
    yield put(requestDeleteReviewCommentFailure(e));
  }
}

function* requestAddQuoteSaga({ payload }: RequestAddQuoteAction) {
  try {
    const response: RequestAddQuoteSuccessActionPayload = yield call(salonAPI.addQuote, payload);
    yield put(requestAddQuoteSuccess());
  } catch (e) {
    yield put(requestAddQuoteFailure(e));
  }
}

function* requestUpdateQuoteSaga({ payload }: RequestUpdateQuoteAction) {
  try {
    const response: RequestUpdateQuoteSuccessActionPayload = yield call(salonAPI.updateQuote, payload);
    yield put(requestUpdateQuoteSuccess());
  } catch (e) {
    yield put(requestUpdateQuoteFailure(e));
  }
}

function* requestDeleteQuoteSaga({ payload }: RequestDeleteQuoteAction) {
  try {
    const response: RequestDeleteQuoteSuccessActionPayload = yield call(salonAPI.deleteQuote, payload);
    yield put(requestDeleteQuoteSuccess());
  } catch (e) {
    yield put(requestDeleteQuoteFailure(e));
  }
}

function* requestGetAllQuoteCommentsSaga({ payload }: RequestGetAllQuoteCommentsAction) {
  try {
    const response: RequestGetAllQuoteCommentsSuccessActionPayload = yield call(salonAPI.getAllQuoteComments, payload);
    yield put(requestGetAllQuoteCommentsSuccess(response));
  } catch (e) {
    yield put(requestGetAllQuoteCommentsFailure(e));
  }
}

function* requestAddQuoteCommentSaga({ payload }: RequestAddQuoteCommentAction) {
  try {
    const response: RequestAddQuoteCommentSuccessActionPayload = yield call(salonAPI.addQuoteComment, payload);
    yield put(requestAddQuoteCommentSuccess());
  } catch (e) {
    yield put(requestAddQuoteCommentFailure(e));
  }
}

function* requestUpdateQuoteCommentSaga({ payload }: RequestUpdateQuoteCommentAction) {
  try {
    const response: RequestUpdateQuoteCommentSuccessActionPayload = yield call(salonAPI.updateQuoteComment, payload);
    yield put(requestUpdateQuoteCommentSuccess());
  } catch (e) {
    yield put(requestUpdateQuoteCommentFailure(e));
  }
}

function* requestDeleteQuoteCommentSaga({ payload }: RequestDeleteQuoteCommentAction) {
  try {
    const response: RequestDeleteQuoteCommentSuccessActionPayload = yield call(salonAPI.deleteQuoteComment, payload);
    yield put(requestDeleteQuoteCommentSuccess());
  } catch (e) {
    yield put(requestDeleteQuoteCommentFailure(e));
  }
}

export default function* salonSaga() {
  yield takeLatest(ActionTypes.REQUEST_GET_SALON, requestGetSalonSaga);
  yield takeLatest(ActionTypes.REQUEST_ADD_SALON, requestAddSalonSaga);
  yield takeLatest(ActionTypes.REQUEST_UPDATE_SALON, requestUpdateSalonSaga);
  yield takeLatest(ActionTypes.REQUEST_DELETE_SALON, requestDeleteSalonSaga);
  yield takeLatest(ActionTypes.REQUEST_GET_BOOK, requestGetBookSaga);
  yield takeLatest(ActionTypes.REQUEST_ADD_BOOK, requestAddBookSaga);
  yield takeLatest(ActionTypes.REQUEST_DELETE_BOOK, requestDeleteBookSaga);
  yield takeLatest(ActionTypes.REQUEST_ADD_REVIEW, requestAddReviewSaga);
  yield takeLatest(ActionTypes.REQUEST_UPDATE_REVIEW, requestUpdateReviewSaga);
  yield takeLatest(ActionTypes.REQUEST_DELETE_REVIEW, requestDeleteReviewSaga);
  yield takeLatest(ActionTypes.REQUEST_GET_ALL_REVIEW_COMMENTS, requestGetAllReviewCommentsSaga);
  yield takeLatest(ActionTypes.REQUEST_ADD_REVIEW_COMMENT, requestAddReviewCommentSaga);
  yield takeLatest(ActionTypes.REQUEST_UPDATE_REVIEW_COMMENT, requestUpdateReviewCommentSaga);
  yield takeLatest(ActionTypes.REQUEST_DELETE_REVIEW_COMMENT, requestDeleteReviewCommentSaga);
  yield takeLatest(ActionTypes.REQUEST_ADD_QUOTE, requestAddQuoteSaga);
  yield takeLatest(ActionTypes.REQUEST_UPDATE_QUOTE, requestUpdateQuoteSaga);
  yield takeLatest(ActionTypes.REQUEST_DELETE_QUOTE, requestDeleteQuoteSaga);
  yield takeLatest(ActionTypes.REQUEST_GET_ALL_QUOTE_COMMENTS, requestGetAllQuoteCommentsSaga);
  yield takeLatest(ActionTypes.REQUEST_ADD_QUOTE_COMMENT, requestAddQuoteCommentSaga);
  yield takeLatest(ActionTypes.REQUEST_UPDATE_QUOTE_COMMENT, requestUpdateQuoteCommentSaga);
  yield takeLatest(ActionTypes.REQUEST_DELETE_QUOTE_COMMENT, requestDeleteQuoteCommentSaga);
}
