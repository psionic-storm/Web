import { AppDispatch, RootState } from 'src/slices';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

export const useAppDispatch: () => Dispatch<AnyAction> = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;