import { createSlice } from '@reduxjs/toolkit';
import { authInitialState as initialState } from '../initialState';

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { saveUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
