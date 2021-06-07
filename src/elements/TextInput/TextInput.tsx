import React, { ChangeEvent } from 'react';
import * as S from './TextInputStyle';

interface TextInputProps {
  type?: 'text' | 'password';
  label?: string;
  width?: number;
  height?: number;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({
  type = 'text',
  label,
  width = 340,
  height = 46,
  placeholder,
  value,
  onChange,
  ...props }: TextInputProps) {

  return (
    <S.Container {...props}>
      <S.Label>{label}</S.Label>
      <S.Input
        type={type}
        width={width}
        height={height}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </S.Container>
  );
}

export default TextInput;
