import ActionTypes from './userActionTypes';

export function openModalAction() {
  return {
    type: ActionTypes.OPEN_MODAL,
    payload: null,
  };
}

export function closeModalAction() {
  return {
    type: ActionTypes.CLOSE_MODAL,
    payload: null,
  };
}
