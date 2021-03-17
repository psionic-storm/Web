import React from 'react';
import * as S from './SignInFormStyle';

function SignInForm() {
  return (
    <S.Container>
      <S.InputForm label="Email address or Nickname" type="text" />
      <S.InputForm label="Password" type="password" />
      <S.SignInButton>Sign In</S.SignInButton>
      <S.SocialSignInButton>Sign In With</S.SocialSignInButton>
      <S.SocialSignInButton>Sign In With</S.SocialSignInButton>
    </S.Container>
  );
}

export default SignInForm;
