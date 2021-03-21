import { RootState } from 'Modules';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestGetAllReviews } from 'Modules/square/squareActions';

function useSquare() {
  const { reviews } = useSelector((state: RootState) => state.squareReducer);
  const dispatch = useDispatch();

  const getAllReviews = useCallback(() => {
    dispatch(requestGetAllReviews());
  }, [dispatch]);

  return { getAllReviews, reviews };
}

export default useSquare;
