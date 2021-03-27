import useModal from 'Hooks/redux/useModal';
import React from 'react';
import { Book } from 'Types/book';
import * as S from './BookListStyle';

interface BookListProps {
  books?: Book[];
}

function BookList({ books }: BookListProps) {
  const { handleOpenModal } = useModal();
  console.log(books);

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>Book</S.Title>
        <S.Button onClick={handleOpenModal}>Add Book</S.Button>
      </S.TitleWrapper>
      <S.BookListWrapper>
        {books?.map((book, idx) => (
          <S.Img key={idx} src={book.thumbnail} />
        ))}
      </S.BookListWrapper>
    </S.Container>
  );
}

export default BookList;
