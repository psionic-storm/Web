import React from 'react';
import * as S from './SearchBarStyle';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ placeholder = 'Search Salon, Space, Book..', value, onChange }: SearchBarProps) {
  return (
    <S.Container>
      <S.SearchInput placeholder={placeholder} value={value} onChange={onChange} />
    </S.Container>
  );
}

export default SearchBar;
