import ActionTypes from './modalActionTypes';

export function openModal() {
  return {
    type: ActionTypes.OPEN_MODAL,
    payload: null,
  };
}

export function closeModal() {
  return {
    type: ActionTypes.CLOSE_MODAL,
    payload: null,
  };
}
