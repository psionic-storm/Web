import React from 'react';
import * as S from './TextInputStyle';

interface TextInputProps {
  type?: 'text' | 'password';
  label?: string;
  width?: number;
  height?: number;
  placeholder?: string;
}

function TextInput({
  type = 'text',
  label,
  width = 340,
  height = 46,
  placeholder,
  ...props }: TextInputProps) {

  return (
    <S.Container {...props}>
      <S.Label htmlFor="input">{label}</S.Label>
      <S.Input id="input"
        type={type}
        width={width}
        height={height}
        placeholder={placeholder}
      />
    </S.Container>
  );
}

export default TextInput;
