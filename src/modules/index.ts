import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'Modules/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
