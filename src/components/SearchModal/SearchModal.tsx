import Card from 'Elements/Card/Card';
import SearchBar from 'Elements/SearchBar/SearchBar';
import React, { useCallback, useEffect, useState } from 'react';
import * as S from './SearchModalStyle';
import useModal from 'Hooks/redux/useModal';
import { searchBook } from 'Apis/kakaoBookAPI';

function SearchModal() {
  const { handleCloseModal } = useModal();
  const [searchInput, setSearchInput] = useState('');
  const [searchedBooks, setSearchedBooks] = useState([]);

  const handleSearchBook = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    if (e.target.value.length) {
      const { documents } = await searchBook(e.target.value);
      console.log(documents);
      setSearchedBooks(documents);
    }
  }, []);

  return (
    <S.Container onClick={handleCloseModal}>
      <S.ModalContent className="modal-content">
        <SearchBar placeholder="Search Books.." value={searchInput} onChange={handleSearchBook} />
        <S.CardList>
          {searchedBooks.map((book: any) => (
            <Card
              key={book.isbn + Math.random()}
              imgSrc={book.thumbnail}
              title={book.title}
              subTitle={book.authors}
              description={book.contents}
            />
          ))}
        </S.CardList>
      </S.ModalContent>
    </S.Container>
  );
}

export default SearchModal;
