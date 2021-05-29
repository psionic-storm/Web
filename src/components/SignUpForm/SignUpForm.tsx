import TextInput from 'Elements/TextInput/TextInput';
import React from 'react';
import * as S from './SignUpFormStyle';

function SignUpForm() {
  return (
    <S.Container>
      <TextInput type="text" label="Email" />
    </S.Container>
  );
}

export default SignUpForm;
