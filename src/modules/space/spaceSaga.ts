/* eslint-disable @typescript-eslint/no-unused-vars */
import { call, put, takeLatest } from 'redux-saga/effects';
import * as spaceAPI from 'Apis/spaceAPI';
import ActionTypes from './spaceActionTypes';
import {
  RequestGetSpaceAction,
  RequestUpdateSpaceAction,
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
  RequestGetSpaceSuccessActionPayload,
  RequestUpdateSpaceSuccessActionPayload,
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
  requestGetSpaceSuccess,
  requestGetSpaceFailure,
  requestUpdateSpaceSuccess,
  requestUpdateSpaceFailure,
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
} from './spaceActions';

function* requestGetSpaceSaga({ payload }: RequestGetSpaceAction) {
  try {
    const response: RequestGetSpaceSuccessActionPayload = yield call(spaceAPI.getSpace, payload);
    yield put(requestGetSpaceSuccess(response));
  } catch (e) {
    yield put(requestGetSpaceFailure(e));
  }
}

function* requestUpdateSpaceSaga({ payload }: RequestUpdateSpaceAction) {
  try {
    const response: RequestUpdateSpaceSuccessActionPayload = yield call(spaceAPI.updateSpace, payload);
    yield put(requestUpdateSpaceSuccess());
  } catch (e) {
    yield put(requestUpdateSpaceFailure(e));
  }
}

function* requestGetBookSaga({ payload }: RequestGetBookAction) {
  try {
    const response: RequestGetBookSuccessActionPayload = yield call(spaceAPI.getBook, payload);
    yield put(requestGetBookSuccess(response));
  } catch (e) {
    yield put(requestGetBookFailure(e));
  }
}

function* requestAddBookSaga({ payload }: RequestAddBookAction) {
  try {
    const response: RequestAddBookSuccessActionPayload = yield call(spaceAPI.addBook, payload);
    yield put(requestAddBookSuccess(response));
  } catch (e) {
    yield put(requestAddBookFailure(e));
  }
}

function* requestDeleteBookSaga({ payload }: RequestDeleteBookAction) {
  try {
    const response: RequestDeleteBookSuccessActionPayload = yield call(spaceAPI.deleteBook, payload);
    yield put(requestDeleteBookSuccess());
  } catch (e) {
    yield put(requestDeleteBookFailure(e));
  }
}

function* requestAddReviewSaga({ payload }: RequestAddReviewAction) {
  try {
    const response: RequestAddReviewSuccessActionPayload = yield call(spaceAPI.addReview, payload);
    yield put(requestAddReviewSuccess());
  } catch (e) {
    yield put(requestAddReviewFailure(e));
  }
}

function* requestUpdateReviewSaga({ payload }: RequestUpdateReviewAction) {
  try {
    const response: RequestUpdateReviewSuccessActionPayload = yield call(spaceAPI.updateReview, payload);
    yield put(requestUpdateReviewSuccess());
  } catch (e) {
    yield put(requestUpdateReviewFailure(e));
  }
}

function* requestDeleteReviewSaga({ payload }: RequestDeleteReviewAction) {
  try {
    const response: RequestDeleteReviewSuccessActionPayload = yield call(spaceAPI.deleteReview, payload);
    yield put(requestDeleteReviewSuccess());
  } catch (e) {
    yield put(requestDeleteReviewFailure(e));
  }
}

function* requestGetAllReviewCommentsSaga({ payload }: RequestGetAllReviewCommentsAction) {
  try {
    const response: RequestGetAllReviewCommentsSuccessActionPayload = yield call(
      spaceAPI.getAllReviewComments,
      payload,
    );
    yield put(requestGetAllReviewCommentsSuccess(response));
  } catch (e) {
    yield put(requestGetAllReviewCommentsFailure(e));
  }
}

function* requestAddReviewCommentSaga({ payload }: RequestAddReviewCommentAction) {
  try {
    const response: RequestAddReviewCommentSuccessActionPayload = yield call(spaceAPI.addReviewComment, payload);
    yield put(requestAddReviewCommentSuccess());
  } catch (e) {
    yield put(requestAddReviewCommentFailure(e));
  }
}

function* requestUpdateReviewCommentSaga({ payload }: RequestUpdateReviewCommentAction) {
  try {
    const response: RequestUpdateReviewCommentSuccessActionPayload = yield call(spaceAPI.updateReviewComment, payload);
    yield put(requestUpdateReviewCommentSuccess());
  } catch (e) {
    yield put(requestUpdateReviewCommentFailure(e));
  }
}

function* requestDeleteReviewCommentSaga({ payload }: RequestDeleteReviewCommentAction) {
  try {
    const response: RequestDeleteReviewCommentSuccessActionPayload = yield call(spaceAPI.deleteReviewComment, payload);
    yield put(requestDeleteReviewCommentSuccess());
  } catch (e) {
    yield put(requestDeleteReviewCommentFailure(e));
  }
}

function* requestAddQuoteSaga({ payload }: RequestAddQuoteAction) {
  try {
    const response: RequestAddQuoteSuccessActionPayload = yield call(spaceAPI.addQuote, payload);
    yield put(requestAddQuoteSuccess());
  } catch (e) {
    yield put(requestAddQuoteFailure(e));
  }
}

function* requestUpdateQuoteSaga({ payload }: RequestUpdateQuoteAction) {
  try {
    const response: RequestUpdateQuoteSuccessActionPayload = yield call(spaceAPI.updateQuote, payload);
    yield put(requestUpdateQuoteSuccess());
  } catch (e) {
    yield put(requestUpdateQuoteFailure(e));
  }
}

function* requestDeleteQuoteSaga({ payload }: RequestDeleteQuoteAction) {
  try {
    const response: RequestDeleteQuoteSuccessActionPayload = yield call(spaceAPI.deleteQuote, payload);
    yield put(requestDeleteQuoteSuccess());
  } catch (e) {
    yield put(requestDeleteQuoteFailure(e));
  }
}

function* requestGetAllQuoteCommentsSaga({ payload }: RequestGetAllQuoteCommentsAction) {
  try {
    const response: RequestGetAllQuoteCommentsSuccessActionPayload = yield call(spaceAPI.getAllQuoteComments, payload);
    yield put(requestGetAllQuoteCommentsSuccess(response));
  } catch (e) {
    yield put(requestGetAllQuoteCommentsFailure(e));
  }
}

function* requestAddQuoteCommentSaga({ payload }: RequestAddQuoteCommentAction) {
  try {
    const response: RequestAddQuoteCommentSuccessActionPayload = yield call(spaceAPI.addQuoteComment, payload);
    yield put(requestAddQuoteCommentSuccess());
  } catch (e) {
    yield put(requestAddQuoteCommentFailure(e));
  }
}

function* requestUpdateQuoteCommentSaga({ payload }: RequestUpdateQuoteCommentAction) {
  try {
    const response: RequestUpdateQuoteCommentSuccessActionPayload = yield call(spaceAPI.updateQuoteComment, payload);
    yield put(requestUpdateQuoteCommentSuccess());
  } catch (e) {
    yield put(requestUpdateQuoteCommentFailure(e));
  }
}

function* requestDeleteQuoteCommentSaga({ payload }: RequestDeleteQuoteCommentAction) {
  try {
    const response: RequestDeleteQuoteCommentSuccessActionPayload = yield call(spaceAPI.deleteQuoteComment, payload);
    yield put(requestDeleteQuoteCommentSuccess());
  } catch (e) {
    yield put(requestDeleteQuoteCommentFailure(e));
  }
}

export default function* spaceSaga() {
  yield takeLatest(ActionTypes.REQUEST_GET_SPACE, requestGetSpaceSaga);
  yield takeLatest(ActionTypes.REQUEST_UPDATE_SPACE, requestUpdateSpaceSaga);
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
