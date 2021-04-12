import React, { useEffect, useMemo } from 'react';
import Post from 'Components/Post/Post';
import * as S from './SquarePageStyle';
import SideBar from 'Components/SideBar/SideBar';
import Header from 'Components/Header/Header';
import { useLocation } from 'react-router';
import { RootState } from 'Modules';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetAllQuotes, requestGetAllReviews } from 'Modules/square/squareActions';

function SquarePage() {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const category = search.split('=')[1];
  const { reviews, quotes } = useSelector((state: RootState) => state.squareReducer);

  const renderPosts = useMemo(() => {
    if (category === 'reviews' && reviews) {
      return reviews.map((review) => <Post key={review.id} type="review" review={review}></Post>);
    }
    if (category === 'quotes' && quotes) {
      return quotes.map((quote) => <Post key={quote.id} type="quote" quote={quote}></Post>);
    }
    return <></>;
  }, [category, reviews, quotes]);

  useEffect(() => {
    if (category === 'reviews') {
      dispatch(requestGetAllReviews());
      return;
    }
    if (category == 'quotes') {
      dispatch(requestGetAllQuotes());
    }
  }, [category, dispatch]);

  return (
    <>
      <Header />
      <S.Container>
        <SideBar />
        <S.PostWrapper>{renderPosts}</S.PostWrapper>
      </S.Container>
    </>
  );
}

export default SquarePage;
