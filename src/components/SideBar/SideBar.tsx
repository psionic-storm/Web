import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import * as S from './SideBarStyle';

function SideBar() {
  const history = useHistory();

  const handleClickReviewBtn = useCallback(() => {
    history.push('/square?category=reviews');
  }, [history]);

  const handleClickQuoteBtn = useCallback(() => {
    history.push('/square?category=quotes');
  }, [history]);

  return (
    <S.Container>
      <S.Button onClick={handleClickReviewBtn}>Review</S.Button>
      <S.Button onClick={handleClickQuoteBtn}>Quote</S.Button>
      <S.Button>Discussion</S.Button>
    </S.Container>
  );
}

export default SideBar;
