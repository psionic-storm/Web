import { Book } from 'Types/book';
import { Comment } from 'Types/comment';
import { Space } from 'Types/space';
import { SpaceAction } from './spaceActions';
import ActionTypes from './spaceActionTypes';

interface SpaceState {
  error?: Error;
  space?: Space;
  book?: Book;
  comments?: Comment[];
  addedBookId?: number;
  addedReviewId?: number;
  addedQuoteId?: number;
  spaceNameModifiedCount: number;
}

const initialState = {
  spaceNameModifiedCount: 0,
};

function spaceReducer(state: SpaceState = initialState, action: SpaceAction): SpaceState {
  switch (action.type) {
    case ActionTypes.REQUEST_GET_SPACE_SUCCESS:
      return {
        ...state,
        space: action.payload,
      };
    case ActionTypes.REQUEST_GET_SPACE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_UPDATE_SPACE_SUCCESS:
      return {
        ...state,
        spaceNameModifiedCount: state.spaceNameModifiedCount + 1,
      };
    case ActionTypes.REQUEST_UPDATE_SPACE_FAILURE:
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
        addedBookId: action.payload.addedBookId,
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
        addedReviewId: action.payload.addedReviewId,
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
        addedQuoteId: action.payload.addedQuoteId,
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

export default spaceReducer;
