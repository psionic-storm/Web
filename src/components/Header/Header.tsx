import React, { useMemo } from 'react';
import HeaderBlock from 'Elements/HeaderBlock/HeaderBlock';
import { Link, useLocation } from 'react-router-dom';
import * as S from './HeaderStyle';
import SearchBar from 'Elements/SearchBar/SearchBar';
import Avatar from 'Elements/svg/UserAvatar/UserAvatar';

function Header() {
  const { pathname } = useLocation();

  const renderSearchBar = useMemo(() => {
    if (!(pathname === '/signIn' || pathname === '/signUp')) {
      return <SearchBar />;
    }
  }, [pathname]);

  return (
    <>
      <S.Container>
        <S.LogoAndSearchBarWrapper>
          <Link to="/">
            <S.Logo>PsionicStorm</S.Logo>
          </Link>
          {renderSearchBar}
        </S.LogoAndSearchBarWrapper>
        <Link to="/signIn">
          <S.SignInButton>Sign In</S.SignInButton>
        </Link>
        <Link to="/space">
          <Avatar />
        </Link>
      </S.Container>
      <HeaderBlock />
    </>
  );
}

export default Header;
