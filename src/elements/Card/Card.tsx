import NoBookImage from 'Elements/svg/NoBookImage/NoBookImage';
import React from 'react';
import * as S from './CardStyle';

interface CardProps {
  imgSrc: string;
  title: string;
  subTitle: string[];
  description: string;
}

function Card({ imgSrc, title, subTitle, description }: CardProps) {
  return (
    <S.Container>
      {imgSrc ? (
        <S.Img src={imgSrc} />
      ) : (
        <S.NoBookImageWrapper>
          <NoBookImage />
        </S.NoBookImageWrapper>
      )}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle?.join(', ')}</S.SubTitle>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Container>
  );
}

export default Card;
