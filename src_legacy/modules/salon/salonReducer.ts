import { Book } from 'Types/book';
import { Comment } from 'Types/comment';
import { Salon } from 'Types/salon';
import { SalonAction } from './salonActions';
import ActionTypes from './salonActionTypes';

interface SalonState {
  error?: Error;
  salon?: Salon;
  book?: Book;
  comments?: Comment[];
}

const initialState = {};

function salonReducer(state: SalonState = initialState, action: SalonAction): SalonState {
  switch (action.type) {
    case ActionTypes.REQUEST_GET_SALON_SUCCESS:
      return {
        ...state,
        salon: action.payload,
      };
    case ActionTypes.REQUEST_GET_SALON_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_ADD_SALON_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_ADD_SALON_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_UPDATE_SALON_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_UPDATE_SALON_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_DELETE_SALON_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_DELETE_SALON_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_GET_BOOK_SUCCESS:
      return {
        ...state,
        book: action.payload,
      };
    case ActionTypes.REQUEST_GET_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_ADD_BOOK_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_ADD_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_DELETE_BOOK_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_DELETE_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_ADD_REVIEW_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_ADD_REVIEW_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_UPDATE_REVIEW_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_UPDATE_REVIEW_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_DELETE_REVIEW_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_DELETE_REVIEW_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_GET_ALL_REVIEW_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    case ActionTypes.REQUEST_GET_ALL_REVIEW_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_ADD_REVIEW_COMMENT_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_ADD_REVIEW_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_UPDATE_REVIEW_COMMENT_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_UPDATE_REVIEW_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_DELETE_REVIEW_COMMENT_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_DELETE_REVIEW_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_ADD_QUOTE_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_ADD_QUOTE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_UPDATE_QUOTE_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_UPDATE_QUOTE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_DELETE_QUOTE_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_DELETE_QUOTE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_GET_ALL_QUOTE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
      };
    case ActionTypes.REQUEST_GET_ALL_QUOTE_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_ADD_QUOTE_COMMENT_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_ADD_QUOTE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_UPDATE_QUOTE_COMMENT_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_UPDATE_QUOTE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_DELETE_QUOTE_COMMENT_SUCCESS:
      return {
        ...state,
      };
    case ActionTypes.REQUEST_DELETE_QUOTE_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default salonReducer;
