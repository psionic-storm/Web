import { RootState } from 'Modules';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from 'Modules/modal/modalActions';

function useModal() {
  const modalOpen = useSelector((state: RootState) => state.modalReducer.modalOpen);
  const dispatch = useDispatch();

  const handleOpenModal = useCallback(() => {
    dispatch(openModal());
  }, [dispatch]);

  const handleCloseModal = useCallback(
    (e) => {
      if (modalOpen && !e.target.closest('.modal-content')) {
        dispatch(closeModal());
      }
    },
    [modalOpen, dispatch],
  );

  return { modalOpen, handleOpenModal, handleCloseModal };
}

export default useModal;
