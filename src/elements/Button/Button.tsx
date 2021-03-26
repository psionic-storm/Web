import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ButtonStyle';

interface ButtonProps {
  children?: string;
  to?: any;
  onClick?: () => void;
}

function Button(props: ButtonProps) {
  const { to } = props;

  return (
    <>
      {to ? (
        <Link to={to}>
          <S.Button {...props} />
        </Link>
      ) : (
        <S.Button {...props} />
      )}
    </>
  );
}

export default Button;
