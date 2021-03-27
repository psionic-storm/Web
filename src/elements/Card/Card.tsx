import NoBookImage from 'Elements/svg/NoBookImage/NoBookImage';
import React, { useMemo } from 'react';
import { BookData } from 'Types/book';
import * as S from './CardStyle';

interface CardProps {
  title: string;
  author: string;
  description: string;
  thumbnail: string;
  onClick: (bookData: BookData) => void;
}

function Card({ title, author, description, thumbnail, onClick }: CardProps) {
  const bookData = useMemo(() => {
    return { title, author, description, thumbnail };
  }, [title, author, description, thumbnail]);

  return (
    <S.Container onClick={() => onClick(bookData)}>
      {thumbnail.length ? (
        <S.Img src={thumbnail} />
      ) : (
        <S.NoBookImageWrapper>
          <NoBookImage />
        </S.NoBookImageWrapper>
      )}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{author}</S.SubTitle>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Container>
  );
}

export default Card;
