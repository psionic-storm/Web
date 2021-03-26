import React, { ChangeEvent } from 'react';
import * as S from './InputFormStyle';

interface InputFormProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputForm({ label, placeholder, type, value, onChange }: InputFormProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input placeholder={placeholder} type={type} value={value} onChange={onChange} />
    </S.Container>
  );
}

export default InputForm;
