import Button from 'Elements/Button/Button';
import React from 'react';
import * as S from './HeaderStyle';

function Header() {
  return (
    <>
      <S.Container>
        <S.Logo>Psionic Storm</S.Logo>
        <Button linkTo="/sign-up">Sign Up</Button>
      </S.Container>
      <S.HeaderBlock />
    </>
  );
}

export default Header;
