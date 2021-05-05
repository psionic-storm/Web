import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ButtonStyle';

interface ButtonProps {
  linkTo?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
}

function Button({ linkTo, onClick, children, ...props }: ButtonProps) {
  return (
    <>
      {linkTo ? (
        <Link to={linkTo}>
          <S.Button {...props}>{children}</S.Button>
        </Link>
      ) : (
        <S.Button onClick={onClick} {...props}>
          {children}
        </S.Button>
      )}
    </>
  );
}

export default Button;
