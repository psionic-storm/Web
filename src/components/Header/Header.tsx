import Button from 'Elements/Button/Button';
import Link from 'next/link';
import React from 'react';
import * as S from './HeaderStyle';

function Header() {
  return (
    <>
      <S.Container>
        <Link href='/'>
          <S.Logo>Psionic Storm</S.Logo>
        </Link>
        <Button linkTo="/sign-up">Sign Up</Button>
      </S.Container>
      <S.HeaderBlock />
    </>
  );
}

export default Header;
