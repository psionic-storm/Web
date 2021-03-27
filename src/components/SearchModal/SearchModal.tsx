import Card from 'Elements/Card/Card';
import SearchBar from 'Elements/SearchBar/SearchBar';
import React, { useCallback, useState } from 'react';
import * as S from './SearchModalStyle';
import useModal from 'Hooks/redux/useModal';
import { searchBook } from 'Apis/kakaoBookAPI';
import { useDispatch } from 'react-redux';
import { requestAddBook as requestAddBookSpace } from 'Modules/space/spaceActions';
import { requestAddBook as requestAddBookSalon } from 'Modules/salon/salonActions';
import { useParams } from 'react-router';
import { closeModal } from 'Modules/modal/modalActions';

function SearchModal() {
  const { handleCloseModal } = useModal();
  const [searchInput, setSearchInput] = useState('');
  const [searchedBooks, setSearchedBooks] = useState([]);
  const dispatch = useDispatch();
  const params = useParams<{ spaceId?: string; salonId?: string }>();
  console.log(params);

  const handleSearchBook = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    if (e.target.value.length) {
      const { documents } = await searchBook(e.target.value);
      setSearchedBooks(documents);
    }
  }, []);

  const handleClickBook = useCallback(
    (bookData) => {
      console.log(bookData);
      if (params.spaceId) {
        dispatch(requestAddBookSpace({ spaceId: params.spaceId, ...bookData }));
      }
      if (params.salonId) {
        dispatch(requestAddBookSalon({ spaceId: params.salonId, ...bookData }));
      }
      dispatch(closeModal());
    },
    [dispatch, params],
  );

  return (
    <S.Container onClick={handleCloseModal}>
      <S.ModalContent className="modal-content">
        <SearchBar placeholder="Search Books.." value={searchInput} onChange={handleSearchBook} />
        <S.CardList>
          {searchedBooks.map((book: any) => (
            <Card
              key={book.isbn + Math.random()}
              title={book.title}
              author={book.authors.join(', ')}
              description={book.contents}
              thumbnail={book.thumbnail}
              onClick={handleClickBook}
            />
          ))}
        </S.CardList>
      </S.ModalContent>
    </S.Container>
  );
}

export default SearchModal;
