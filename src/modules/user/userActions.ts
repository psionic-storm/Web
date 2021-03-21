import ActionTypes from './userActionTypes';

export type UserAction =
  | RequestSignUpAction
  | ReturnType<typeof requestSignUpSuccess>
  | ReturnType<typeof requestSignUpFailure>
  | RequestSignInAction
  | ReturnType<typeof requestSignInSuccess>
  | ReturnType<typeof requestSignInFailure>;

export type RequestSignUpAction = ReturnType<typeof requestSignUp>;
export type RequestSignInAction = ReturnType<typeof requestSignIn>;

export type RequestSignUpActionPayload = { loginId: string; password: string; nickname: string };
export type RequestSignUpSuccessActionPayload = number;
export type RequestSignUpFailureActionPayload = Error;

export type RequestSignInActionPayload = { loginId: string; password: string };
export type RequestSignInSuccessActionPayload = { accessToken: string };
export type RequestSignInFailureActionPayload = Error;

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

export function requestSignInSuccess(accessToken: RequestSignInSuccessActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_SIGN_IN_SUCCESS,
    payload: { accessToken },
  };
}

export function requestSignInFailure(error: RequestSignInFailureActionPayload) {
  return <const>{
    type: ActionTypes.REQUEST_SIGN_IN_FAILURE,
    payload: { error },
  };
}
