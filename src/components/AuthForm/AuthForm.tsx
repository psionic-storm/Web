import { RootState } from 'Modules';
import { requestSignIn, requestSignUp, requestSignUpFailure } from 'Modules/user/userActions';
import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import * as S from './AuthFormStyle';

interface AuthFormProps {
  authType: 'Sign In' | 'Sign Up';
}

function AuthForm({ authType }: AuthFormProps) {
  const history = useHistory();
  const { isSignUpSuccess, isSignedIn } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleChangeNickname = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  }, []);

  const handleClickSignInOrSignUp = useCallback(() => {
    if (authType === 'Sign In') {
      dispatch(requestSignIn({ loginId: email, password }));
      return;
    }
    if (authType === 'Sign Up') {
      dispatch(requestSignUp({ loginId: email, password, nickname }));
    }
  }, [authType, email, password, nickname, dispatch]);

  useEffect(() => {
    if (authType === 'Sign In' && isSignedIn) {
      history.push('/square');
    }
    if (authType === 'Sign Up' && isSignUpSuccess) {
      history.push('/signIn');
      dispatch(requestSignUpFailure({ message: 'forced failure' }));
    }
  }, [authType, isSignUpSuccess, history, dispatch, isSignedIn]);

  return (
    <S.Container>
      <S.InputForm label="Email address" type="text" value={email} onChange={handleChangeEmail} />
      <S.InputForm label="Password" type="password" value={password} onChange={handleChangePassword} />
      {authType === 'Sign Up' && (
        <S.InputForm label="Nickname" type="text" value={nickname} onChange={handleChangeNickname} />
      )}
      <S.SignInButton onClick={handleClickSignInOrSignUp}>{authType}</S.SignInButton>
      <S.SocialSignInButton>{`${authType} With`}</S.SocialSignInButton>
      <S.SocialSignInButton>{`${authType} With`}</S.SocialSignInButton>
      {authType === 'Sign In' && (
        <S.LinkButtonWrapper>
          <S.LinkButton to="/signUp">Create An Account</S.LinkButton>
        </S.LinkButtonWrapper>
      )}
    </S.Container>
  );
}

export default AuthForm;
