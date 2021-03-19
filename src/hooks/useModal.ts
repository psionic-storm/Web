import { RootState } from 'Modules';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModalAction, closeModalAction } from 'Modules/modal/actions';

function useModal() {
  const modalOpen = useSelector((state: RootState) => state.modalReducer.modalOpen);
  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    dispatch(openModalAction);
  }, [dispatch]);

  const closeModal = useCallback(() => {
    dispatch(closeModalAction);
  }, [dispatch]);

  return { modalOpen, openModal, closeModal };
}

export default useModal;
