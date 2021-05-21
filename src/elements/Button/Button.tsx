import React from 'react';
import Link from 'next/link';

import * as S from './ButtonStyle';

interface ButtonProps {
  linkTo?: string;
  children: string | JSX.Element;
}

function Button({ linkTo, children, ...props }: ButtonProps) {
  return (
    <>
      {linkTo ? (
        <Link href="linkTo">
          <S.Button {...props}>{children}</S.Button>
        </Link>
      ) : (
        <S.Button {...props}>{children}</S.Button>
      )}
    </>
  );
}

export default Button;
