import React from 'react';
import HeaderBlock from 'Elements/HeaderBlock/HeaderBlock';
import { Link } from 'react-router-dom';
import * as S from './HeaderStyle';

function Header() {
  return (
    <>
      <S.Container>
        <Link to="/">
          <S.Logo>PsionicStorm</S.Logo>
        </Link>
        <Link to="/signIn">
          <S.SignInButton>Sign In</S.SignInButton>
        </Link>
      </S.Container>
      <HeaderBlock />
    </>
  );
}

export default Header;
