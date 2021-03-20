import { ModalAction } from './modalActions';
import ActionTypes from './modalActionTypes';

interface ModalState {
  modalOpen: boolean;
}

const initialState = {
  modalOpen: false,
};

function modalReducer(state: ModalState = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        modalOpen: true,
      };
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
}

export default modalReducer;
