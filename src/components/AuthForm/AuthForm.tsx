import React from 'react';
import * as S from './AuthFormStyle';

interface AuthFormProps {
  authType: 'Sign In' | 'Sign Up';
}

function AuthForm({ authType }: AuthFormProps) {
  return (
    <S.Container>
      <S.InputForm label="Email address" type="text" />
      <S.InputForm label="Password" type="password" />
      {authType === 'Sign Up' && <S.InputForm label="Nickname" type="text" />}
      <S.SignInButton>{authType}</S.SignInButton>
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
