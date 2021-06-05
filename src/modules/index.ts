import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'Modules/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    counter: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;