import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ButtonStyle';

interface ButtonProps {
  children?: string;
  to?: any;
}

function Button({ to, children }: ButtonProps) {
  return (
    <>
      {to ? (
        <Link to={to}>
          <S.Button>{children}</S.Button>
        </Link>
      ) : (
        <S.Button>{children}</S.Button>
      )}
    </>
  );
}

export default Button;
