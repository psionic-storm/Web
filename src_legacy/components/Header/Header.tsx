import React, { useCallback, useMemo } from 'react';
import HeaderBlock from 'Elements/HeaderBlock/HeaderBlock';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as S from './HeaderStyle';
import SearchBar from 'Elements/SearchBar/SearchBar';
import Avatar from 'Elements/svg/UserAvatar/UserAvatar';
import { useSelector } from 'react-redux';
import { RootState } from 'Modules';

function Header() {
  const { pathname } = useLocation();
  const history = useHistory();
  const { isSignedIn, userInfo } = useSelector((state: RootState) => state.userReducer);

  const renderSearchBar = useMemo(() => {
    if (!(pathname === '/signIn' || pathname === '/signUp')) {
      return <SearchBar />;
    }
  }, [pathname]);

  const handleClickAvatar = useCallback(() => {
    history.push(`/space/${userInfo?.spaceId}`);
  }, [history, userInfo]);

  return (
    <>
      <S.Container>
        <S.LogoAndSearchBarWrapper>
          <Link to="/square?category=reviews">
            <S.Logo>PsionicStorm</S.Logo>
          </Link>
          {renderSearchBar}
        </S.LogoAndSearchBarWrapper>
        {isSignedIn ? (
          <Avatar onClick={handleClickAvatar} />
        ) : (
          <Link to="/signIn">
            <S.SignInButton>Sign In</S.SignInButton>
          </Link>
        )}
      </S.Container>
      <HeaderBlock />
    </>
  );
}

export default Header;
