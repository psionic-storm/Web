import React from 'react';
import Link from 'next/link';

import * as S from './ButtonStyle';

interface ButtonProps {
  linkTo?: string;
  children: string | JSX.Element;
  width?: number;
  height?: number;
}

function Button({
  linkTo,
  children,
  width,
  height,
  ...props
}: ButtonProps) {
  return (
    <>
      {linkTo ? (
        <Link href={linkTo}>
          <S.Button
            width={width}
            height={height}
            {...props}
          >
            {children}
          </S.Button>
        </Link>
      ) : (
        <S.Button
          width={width}
          height={height}
          {...props}
        >
          {children}
        </S.Button>
      )}
    </>
  );
}

export default Button;
