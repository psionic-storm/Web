import { requestGetAllQuotes, requestGetAllReviews } from 'Modules/square/squareActions';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import * as S from './SideBarStyle';

function SideBar() {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const category = search.split('=')[1];
  const history = useHistory();

  const handleClickReviewBtn = useCallback(() => {
    history.push('/square?category=reviews');
    if (category === 'reviews') {
      dispatch(requestGetAllReviews());
    }
  }, [dispatch, history, category]);

  const handleClickQuoteBtn = useCallback(() => {
    history.push('/square?category=quotes');
    if (category === 'quotes') {
      dispatch(requestGetAllQuotes());
    }
  }, [dispatch, history, category]);

  return (
    <S.Container>
      <S.Button onClick={handleClickReviewBtn}>Review</S.Button>
      <S.Button onClick={handleClickQuoteBtn}>Quote</S.Button>
      <S.Button>Discussion</S.Button>
    </S.Container>
  );
}

export default SideBar;
