import ActionTypes from './userActionTypes';

export type UserAction =
  | RequestSignUpAction
  | ReturnType<typeof requestSignUpSuccess>
  | ReturnType<typeof requestSignUpFailure>;

export type RequestSignUpAction = ReturnType<typeof requestSignUp>;

export type RequestSignUpActionPayload = { loginId: string; password: string; nickname: string };
export type RequestSignUpSuccessActionPayload = number;
export type RequestSignUpFailureActionPayload = Error;
export type RequestSignInActionPayload = { loginId: string; password: string };

export function requestSignUp({ loginId, password, nickname }: RequestSignUpActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_SIGN_UP,
    payload: {
      loginId,
      password,
      nickname,
    },
  };
}

export function requestSignUpSuccess(userId: RequestSignUpSuccessActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_SIGN_UP_SUCCESS,
    payload: { userId },
  };
}

export function requestSignUpFailure(error: RequestSignUpFailureActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_SIGN_UP_FAILURE,
    payload: { error },
  };
}

export function requestSignIn({ loginId, password }: RequestSignInActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_SIGN_IN,
    payload: {
      loginId,
      password,
    },
  };
}
