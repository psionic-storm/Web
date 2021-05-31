import React from 'react';
import SignUpForm from 'Components/SignUpForm/SignUpForm';
import * as S from './SignUpPageStyle';
import Header from 'Components/Header/Header';

function SignUpPage() {
  return (
    <>
      <Header />
      <S.Container>
        <SignUpForm />
      </S.Container>
    </>
  );
}

export default SignUpPage;
