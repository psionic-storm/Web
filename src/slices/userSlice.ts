import { createSlice } from '@reduxjs/toolkit';
import { User } from 'Types/user';

type UserState = User;

const initialState: UserState = {
  id: null,
  email: '',
  nickname: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { getCurrentUser } = userSlice.actions;

export default userSlice.reducer;
