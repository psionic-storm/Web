import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import modalReducer from './modal/modalReducer';
import userReducer from './user/userReducer';
import userSaga from './user/userSaga';

const rootReducer = combineReducers({ modalReducer, userReducer });

export function* rootSaga() {
  yield all([userSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
