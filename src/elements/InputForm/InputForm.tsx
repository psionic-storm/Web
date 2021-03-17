import React from 'react';
import * as S from './InputFormStyle';

interface InputFormProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password';
}

function InputForm({ label, placeholder, type }: InputFormProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input placeholder={placeholder} type={type} />
    </S.Container>
  );
}

export default InputForm;
