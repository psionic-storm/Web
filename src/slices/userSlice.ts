import { createSlice } from '@reduxjs/toolkit';
import { User } from 'Types/user';

interface UserState extends User {
  isSignedIn: boolean;
}

const initialState: UserState = {
  id: null,
  email: '',
  nickname: '',
  isSignedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      Object.assign(state, action.payload);
      state.isSignedIn = true;
    },
    signOut: () => {
      return initialState;
    },
    getCurrentUser: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { signIn, signOut, getCurrentUser } = userSlice.actions;

export default userSlice.reducer;
