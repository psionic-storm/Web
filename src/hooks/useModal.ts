import { RootState } from 'Modules';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModalAction, closeModalAction } from 'Modules/modal/actions';

function useModal() {
  const modalOpen = useSelector((state: RootState) => state.modalReducer.modalOpen);
  const dispatch = useDispatch();

  const openModal = useCallback(() => {
    console.log('asdf');
    dispatch(openModalAction());
  }, [dispatch]);

  const closeModal = useCallback(
    (e) => {
      if (modalOpen && !e.target.closest('.modal-content')) {
        dispatch(closeModalAction());
      }
    },
    [modalOpen, dispatch],
  );

  return { modalOpen, openModal, closeModal };
}

export default useModal;
