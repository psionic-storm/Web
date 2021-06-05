import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'Modules/userSlice';

const store = configureStore({
  reducer: {
    counter: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;