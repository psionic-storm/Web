import { UserAction } from './userActions';
import ActionTypes from './userActionTypes';
import { User } from 'Types/user';

interface UserState {
  error?: any;
  isSignUpSuccess?: boolean;
  isSignedIn?: boolean;
  userInfo?: User;
}

const initialState = {
  isSignUpSuccess: false,
  isSignedIn: false,
};

function userReducer(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case ActionTypes.REQUEST_SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignUpSuccess: true,
      };
    case ActionTypes.REQUEST_SIGN_UP_FAILURE:
      return {
        ...state,
        isSignUpSuccess: false,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
      };
    case ActionTypes.REQUEST_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionTypes.REQUEST_GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isSignedIn: action.payload.id ? true : false,
        userInfo: action.payload,
      };
    case ActionTypes.REQUEST_GET_CURRENT_USER_FAILURE:
      return {
        ...state,
        isSignedIn: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default userReducer;
