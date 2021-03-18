import React from 'react';
import * as S from './SearchBarStyle';

function SearchBar() {
  return (
    <S.Container>
      <S.SearchInput placeholder="Search Salon, Space, Book.." />
    </S.Container>
  );
}

export default SearchBar;
