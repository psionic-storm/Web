import SearchBar from 'Elements/SearchBar/SearchBar';
import React from 'react';
import * as S from './SearchModalStyle';

interface SearchModalProps {
  hideBookSearchModal: () => void;
}

function SearchModal({ hideBookSearchModal }: SearchModalProps) {
  return (
    <S.Container >
      <S.ModalContent className="ModalContent">
        <SearchBar />
      </S.ModalContent>
    </S.Container>
  );
}

export default SearchModal;
