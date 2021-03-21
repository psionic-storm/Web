import { SquareAction } from './squareActions';
import ActionTypes from './squareActionTypes';
import { Review } from 'Types/review';
import { Quote } from 'Types/quote';

interface SquareState {
  error?: Error;
  reviews?: Review[];
  quotes?: Quote[];
}

const initialState = {};

function squareReducer(state: SquareState = initialState, action: SquareAction): SquareState {
  switch (action.type) {
    case ActionTypes.REQUEST_GET_ALL_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionTypes.REQUEST_GET_ALL_REVIEWS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_GET_ALL_QUOTES_SUCCESS:
      return {
        ...state,
        quotes: action.payload,
      };
    case ActionTypes.REQUEST_GET_ALL_QUOTES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default squareReducer;
