import React from 'react';
import * as S from './SearchBarStyle';

interface SearchBarProps {
  placeholder?: string;
}

function SearchBar({
  placeholder = 'Search Salon, Space, Book..',
}: SearchBarProps) {
  return (
    <S.Container>
      <S.SearchInput placeholder={placeholder} />
    </S.Container>
  );
}

export default SearchBar;
