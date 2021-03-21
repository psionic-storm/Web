import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import modalReducer from './modal/modalReducer';
import userReducer from './user/userReducer';
import userSaga from './user/userSaga';
import squareSaga from './square/squareSaga';
import squareReducer from './square/squareReducer';
import spaceSaga from './user/spaceSaga';
import spaceReducer from './user/spaceReducer';

const rootReducer = combineReducers({ modalReducer, userReducer, squareReducer, spaceReducer });

export function* rootSaga() {
  yield all([userSaga(), squareSaga()], spaceSaga());
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
