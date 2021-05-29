import Button from 'Elements/Button/Button';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React, { useMemo } from 'react';
import * as S from './HeaderStyle';

function Header() {
  const { pathname } = useRouter();

  const buttonLink = useMemo(() => {
    return pathname === '/sign-in' ? '/sign-up' : '/sign-in';
  }, [pathname]);

  const buttonText = useMemo(() => {
    return pathname === '/sign-in' ? 'Sign Up' : 'Sign In';
  }, [pathname]);

  return (
    <>
      <S.Container>
        <Link href='/'>
          <S.Logo>Psionic Storm</S.Logo>
        </Link>
        <Button linkTo={buttonLink}>{buttonText}</Button>
      </S.Container>
      <S.HeaderBlock />
    </>
  );
}

export default Header;
