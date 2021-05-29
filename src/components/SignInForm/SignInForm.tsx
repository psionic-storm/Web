import React from 'react';
import TextInput from 'Elements/TextInput/TextInput';
import * as S from './SignInFormStyle';

function SignInForm() {
  return (
    <S.Container>
      <S.InputWrapper>
        <TextInput
          type="text"
          label="Email"
        />
        <TextInput
          type="password"
          label="Password"
        />
      </S.InputWrapper>
      <S.SignInButton>Sign In</S.SignInButton>
      <S.createAccountButton linkTo='/sign-up'>
        Create an account
      </S.createAccountButton>
    </S.Container>
  );
}

export default SignInForm;
