import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './HeaderStyle';

function Header() {
  return (
    <>
      <S.Container>
        <Link to="/">
          <S.Logo>Psionic Storm</S.Logo>
        </Link>
        <S.SignInButton linkTo="/sign-in">Sign In</S.SignInButton>
      </S.Container>
      <S.HeaderBlock />
    </>
  );
}

export default Header;
