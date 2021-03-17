import React from 'react';
import * as S from './AuthFormStyle';

interface AuthFormProps {
  authType: 'Sign In' | 'Sign Out';
}

function AuthForm({ authType }: AuthFormProps) {
  return (
    <S.Container>
      <S.InputForm label="Email address or Nickname" type="text" />
      <S.InputForm label="Password" type="password" />
      <S.SignInButton>{authType}</S.SignInButton>
      <S.SocialSignInButton>{`${authType} With`}</S.SocialSignInButton>
      <S.SocialSignInButton>{`${authType} With`}</S.SocialSignInButton>
    </S.Container>
  );
}

export default AuthForm;
