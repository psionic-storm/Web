import React from 'react';
import * as S from './TextInputStyle';

interface TextInputProps {
  type?: 'text' | 'password';
  label?: string;
  width?: number;
  height?: number;
  placeholder?: string;
}

function TextInput({ type = 'text', label, width = 80, height = 30, placeholder, ...props }: TextInputProps) {
  return (
    <S.Container>
      <S.Label htmlFor="input">{label}</S.Label>
      <S.Input id="input" type={type} width={width} height={height} placeholder={} />
    </S.Container>
  );
}

export default TextInput;