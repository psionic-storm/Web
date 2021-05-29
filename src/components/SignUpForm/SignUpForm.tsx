import React from 'react';
import TextInput from 'Elements/TextInput/TextInput';
import * as S from './SignUpFormStyle';

function SignUpForm() {
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
      <S.SignUpButton>
        Sign Up
      </S.SignUpButton>
    </S.Container>
  );
}

export default SignUpForm;
