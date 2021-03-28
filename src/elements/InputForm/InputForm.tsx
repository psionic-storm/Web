import React, { ChangeEvent } from 'react';
import * as S from './InputFormStyle';

interface InputFormProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  className?: string;
}

function InputForm({ label, placeholder, type, value, onChange, onClick, className }: InputFormProps) {
  return (
    <S.Container className={className}>
      <S.Label>{label}</S.Label>
      <S.Input placeholder={placeholder} type={type} value={value} onChange={onChange} onClick={onClick} />
    </S.Container>
  );
}

export default InputForm;
