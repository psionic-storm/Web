import React, { useState } from 'react';
import TextInput from 'Elements/TextInput/TextInput';
import * as S from './SignInFormStyle';
import useUser from 'Hooks/useUser';

function SignInForm() {
  const { handleSignIn } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <S.Container>
      <S.InputWrapper>
        <TextInput
          type="text"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </S.InputWrapper>
      <S.SignInButton onClick={() => handleSignIn({ email, password })}>
        Sign In
      </S.SignInButton>
      <S.createAccountButton linkTo='/sign-up'>
        Create an account
      </S.createAccountButton>
    </S.Container>
  );
}

export default SignInForm;
