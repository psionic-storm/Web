import { UserAction } from './userActions';
import ActionTypes from './userActionTypes';

interface UserState {
  error?: Error;
  isSignUpSuccess?: boolean;
}

const initialState = {};

function userReducer(state: UserState = initialState, action: UserAction): UserState {
  switch (action.type) {
    case ActionTypes.REQUEST_SIGN_UP_SUCCESS:
      return { ...state, isSignUpSuccess: true };
    case ActionTypes.REQUEST_SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default userReducer;
