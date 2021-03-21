import { SquareAction } from './squareActions';
import ActionTypes from './squareActionTypes';
import { Review } from 'Types/review';

interface SquareState {
  error?: Error;
  reviews?: Review[];
}

const initialState = {};

function squareReducer(state: SquareState = initialState, action: SquareAction): SquareState {
  switch (action.type) {
    case ActionTypes.REQUEST_GET_GET_ALL_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionTypes.REQUEST_GET_GET_ALL_REVIEWS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default squareReducer;
