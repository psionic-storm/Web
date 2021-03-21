import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import modalReducer from './modal/modalReducer';
import squareSaga from './square/squareSaga';
import squareReducer from './square/squareReducer';
import userReducer from './user/userReducer';
import userSaga from './user/userSaga';

const rootReducer = combineReducers({ modalReducer, userReducer, squareReducer });

export function* rootSaga() {
  yield all([userSaga(), squareSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
