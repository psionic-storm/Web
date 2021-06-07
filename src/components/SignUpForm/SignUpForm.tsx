import React, { useState } from 'react';
import TextInput from 'Elements/TextInput/TextInput';
import * as S from './SignUpFormStyle';
import useUser from 'Hooks/useUser';

function SignUpForm() {
  const { handleSignUp } = useUser();
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
      <S.SignUpButton onClick={() => handleSignUp({ email, password })} >
        Sign Up
      </S.SignUpButton>
    </S.Container>
  );
}

export default SignUpForm;
