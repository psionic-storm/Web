import NoBookImage from 'Elements/svg/NoBookImage/NoBookImage';
import useModal from 'Hooks/useModal';
import React, { useCallback } from 'react';
import { useHistory, useParams } from 'react-router';
import { Book } from 'Types/book';
import * as S from './BookListStyle';

interface BookListProps {
  books?: Book[];
}

function BookList({ books }: BookListProps) {
  const { handleOpenModal } = useModal();
  const history = useHistory();
  const { spaceId } = useParams<{ spaceId?: string; salonId?: string }>();

  const handleClickBook = useCallback(
    (bookId) => {
      history.push(`/space/${spaceId}/book/${bookId}`);
    },
    [history, spaceId],
  );

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>Book</S.Title>
        <S.Button onClick={handleOpenModal}>Add Book</S.Button>
      </S.TitleWrapper>
      <S.BookListWrapper>
        {books?.map((book) =>
          book.thumbnail ? (
            <S.Img key={book.id} src={book.thumbnail} onClick={() => handleClickBook(book.id)} />
          ) : (
            <S.NoBookImageWrapper key={book.id} onClick={() => handleClickBook(book.id)}>
              <NoBookImage />
            </S.NoBookImageWrapper>
          ),
        )}
      </S.BookListWrapper>
    </S.Container>
  );
}

export default BookList;
