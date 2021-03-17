import React from 'react';
import AuthForm from 'Components/AuthForm/AuthForm';
import * as S from './SignUpPageStyle';

function SignUpPage() {
  return (
    <S.Container>
      <AuthForm authType="Sign Up" />
    </S.Container>
  );
}

export default SignUpPage;
