import { RootState } from 'Modules';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestGetAllQuotes, requestGetAllReviews } from 'Modules/square/squareActions';

function useSquare() {
  const { reviews, quotes } = useSelector((state: RootState) => state.squareReducer);
  const dispatch = useDispatch();

  const getAllReviews = useCallback(() => {
    dispatch(requestGetAllReviews());
  }, [dispatch]);

  const getAllQuotes = useCallback(() => {
    dispatch(requestGetAllQuotes());
  }, [dispatch]);

  return { getAllReviews, reviews, getAllQuotes, quotes };
}

export default useSquare;
