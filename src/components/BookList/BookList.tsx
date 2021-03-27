import NoBookImage from 'Elements/svg/NoBookImage/NoBookImage';
import useModal from 'Hooks/redux/useModal';
import React, { useEffect } from 'react';
import { Book } from 'Types/book';
import * as S from './BookListStyle';

interface BookListProps {
  books?: Book[];
}

function BookList({ books }: BookListProps) {
  const { handleOpenModal } = useModal();

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>Book</S.Title>
        <S.Button onClick={handleOpenModal}>Add Book</S.Button>
      </S.TitleWrapper>
      <S.BookListWrapper>
        {books?.map((book) =>
          book.thumbnail ? (
            <S.Img key={book.id} src={book.thumbnail} />
          ) : (
            <S.NoBookImageWrapper key={book.id}>
              <NoBookImage />
            </S.NoBookImageWrapper>
          ),
        )}
      </S.BookListWrapper>
    </S.Container>
  );
}

export default BookList;
