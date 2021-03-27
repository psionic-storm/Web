import React from 'react';
import * as S from './CardStyle';

interface CardProps {
  imgSrc: string;
  title: string;
  subTitle: string | string[];
  description: string;
}

function Card({ imgSrc, title, subTitle, description }: CardProps) {
  return (
    <S.Container>
      <S.Img src={imgSrc} />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Container>
  );
}

export default Card;
