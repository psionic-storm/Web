import React from 'react';
import * as S from './BookListStyle';

interface BookListProps {
  openBookSearchModal: () => void;
}

function BookList({ openBookSearchModal }: BookListProps) {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>Book</S.Title>
        <S.Button>Add Book</S.Button>
      </S.TitleWrapper>
      <S.BookListWrapper>
        {Array(10)
          .fill(0)
          .map((book, idx) => (
            <S.Img
              onClick={openBookSearchModal}
              key={idx}
              src="http://image.kyobobook.co.kr/images/book/large/109/l9788983976109.jpg"
            />
          ))}
      </S.BookListWrapper>
    </S.Container>
  );
}

export default BookList;
