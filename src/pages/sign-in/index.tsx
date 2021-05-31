import React from 'react';
import SignInForm from 'Components/SignInForm/SignInForm';
import * as S from './SignInPageStyle';
import Header from 'Components/Header/Header';

function SignUpPage() {
  return (
    <>
      <Header />
      <S.Container>
        <SignInForm />
      </S.Container>
    </>
  );
}

export default SignUpPage;
