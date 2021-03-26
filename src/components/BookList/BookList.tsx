import useModal from 'Hooks/redux/useModal';
import React from 'react';
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
        <S.Button>Add Book</S.Button>
      </S.TitleWrapper>
      <S.BookListWrapper>
        {books?.map((book, idx) => (
          <S.Img
            onClick={handleOpenModal}
            key={idx}
            src="http://image.kyobobook.co.kr/images/book/large/109/l9788983976109.jpg"
          />
        ))}
      </S.BookListWrapper>
    </S.Container>
  );
}

export default BookList;
