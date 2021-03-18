import React from 'react';
import AuthForm from 'Components/AuthForm/AuthForm';
import * as S from './SignInPageStyle';
import Header from 'Components/Header/Header';

function SignInPage() {
  return (
    <>
      <Header />
      <S.Container>
        <AuthForm authType="Sign In" />
      </S.Container>
    </>
  );
}

export default SignInPage;
