import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeaderStyle';

function Header() {
  return (
    <S.Container>
      <Link to="/">
        <S.Logo>PsionicStorm</S.Logo>
      </Link>
      <Link to="/signIn">
        <S.SignInButton>Sign In</S.SignInButton>
      </Link>
    </S.Container>
  );
}

export default Header;
