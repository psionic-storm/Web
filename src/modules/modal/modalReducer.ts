import ActionTypes from './modalActionTypes';

const initialState = {
  modalOpen: false,
};

function modalReducer(state: any = initialState, action: any) {
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