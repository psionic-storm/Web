import React from 'react';
import AuthForm from 'Components/AuthForm/AuthForm';
import * as S from './SignInPageStyle';

function SignInPage() {
  return (
    <S.Container>
      <AuthForm authType="Sign In" />
    </S.Container>
  );
}

export default SignInPage;
