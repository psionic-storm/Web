import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import modalReducer from './modal/modalReducer';

const rootReducer = combineReducers({ modalReducer });

export function* rootSaga() {
  yield all([]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
