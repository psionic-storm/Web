import Card from 'Elements/Card/Card';
import SearchBar from 'Elements/SearchBar/SearchBar';
import React from 'react';
import * as S from './SearchModalStyle';

function SearchModal() {
  const data = {
    imgSrc:
      'http://image.kyobobook.co.kr/images/book/large/109/l9788983976109.jpg',
    title: '스타크래프트',
    subTitle: 'Granzort',
    description: "this is closest i'v ever gotten to a college graduation.",
  };
  return (
    <S.Container>
      <S.ModalContent className="ModalContent">
        <SearchBar placeholder="Search Books.." />
        <S.CardList>
          {Array(10)
            .fill(0)
            .map((card, idx) => (
              <Card key={idx} {...data} />
            ))}
        </S.CardList>
      </S.ModalContent>
    </S.Container>
  );
}

export default SearchModal;
