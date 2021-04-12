import ActionTypes from './modalActionTypes';

export type ModalAction = ReturnType<typeof openModal> | ReturnType<typeof closeModal>;

export function openModal() {
  return <const>{
    type: ActionTypes.OPEN_MODAL,
    payload: null,
  };
}

export function closeModal() {
  return <const>{
    type: ActionTypes.CLOSE_MODAL,
    payload: null,
  };
}
