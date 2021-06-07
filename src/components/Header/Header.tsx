import Button from 'Elements/Button/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useMemo } from 'react';
import * as S from './HeaderStyle';
import useUser from 'Hooks/useUser';

function Header() {
  const { pathname } = useRouter();
  const { handleSignOut, isSignedIn } = useUser();

  const buttonLink = useMemo(() => {
    return pathname === '/sign-in' ? '/sign-up' : '/sign-in';
  }, [pathname]);

  const buttonText = useMemo(() => {
    return pathname === '/sign-in' ? 'Sign Up' : 'Sign In';
  }, [pathname]);

  const signOutButton = useMemo(() => {
    return <Button onClick={handleSignOut}>SignOut</Button>;
  }, [handleSignOut]);

  return (
    <>
      <S.Container>
        <Link href='/'>
          <S.Logo>Psionic Storm</S.Logo>
        </Link>
        {isSignedIn
          ? signOutButton
          : <Button linkTo={buttonLink}>{buttonText}</Button>}
      </S.Container>
      <S.HeaderBlock />
    </>
  );
}

export default Header;
