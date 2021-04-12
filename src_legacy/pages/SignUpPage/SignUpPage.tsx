import React from 'react';
import AuthForm from 'Components/AuthForm/AuthForm';
import * as S from './SignUpPageStyle';
import Header from 'Components/Header/Header';

function SignUpPage() {
  return (
    <>
      <Header />
      <S.Container>
        <AuthForm authType="Sign Up" />
      </S.Container>
    </>
  );
}

export default SignUpPage;
