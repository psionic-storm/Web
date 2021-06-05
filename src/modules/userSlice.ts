import { createSlice } from '@reduxjs/toolkit';

interface userState {
  email: string;
  nickname: string;
}

const initialState: userState = {
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
