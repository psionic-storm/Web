import React from 'react';
import { AuthForm } from '../../components/AuthForm';
import { Header } from '../../components/Header';
import * as S from './SignUpStyle';

const SignUp = () => {
  return (
    <S.Container>
      <Header />
      <AuthForm type="signUp" />
    </S.Container>
  );
};

export default SignUp;
