import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ButtonStyle';

interface ButtonProps {
  children?: string;
  to?: any;
  selectedCategory?: string;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const { children, to } = props;
  return (
    <>
      {to ? (
        <Link to={to}>
          <S.Button {...props}>{children}</S.Button>
        </Link>
      ) : (
        <S.Button {...props}>{children}</S.Button>
      )}
    </>
  );
}

export default Button;
