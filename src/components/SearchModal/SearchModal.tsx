import Card from 'Elements/Card/Card';
import SearchBar from 'Elements/SearchBar/SearchBar';
import React from 'react';
import * as S from './SearchModalStyle';
import useModal from 'Hooks/redux/useModal';

function SearchModal() {
  const { handleCloseModal } = useModal();

  const data = {
    imgSrc: 'http://image.kyobobook.co.kr/images/book/large/109/l9788983976109.jpg',
    title: '스타크래프트',
    subTitle: 'Granzort',
    description: "this is the closest i'v ever gotten to a college graduation.",
  };
  return (
    <S.Container onClick={handleCloseModal}>
      <S.ModalContent className="modal-content">
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
