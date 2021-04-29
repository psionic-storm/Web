import React from 'react';
import * as S from './HeaderStyle';

function Header() {
  return (
    <>
      <S.Container>
        <S.Logo>Psionic Storm</S.Logo>
        <S.SignInButton>Sign In</S.SignInButton>
      </S.Container>
      <S.HeaderBlock />
    </>
  );
}

export default Header;
