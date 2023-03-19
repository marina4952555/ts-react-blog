import { createSlice } from '@reduxjs/toolkit';
import { UsersType } from '../../types';
import { fetchInitialData } from '../common/thunks';
import { userPresence } from './thunks';

const initialState = [] as UsersType[];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchInitialData.fulfilled, (state, action) => {
      if (action.payload) {
        const { users } = action.payload;

        if (users) {
          return users;
        }
      }
    });
    builder.addCase(userPresence.fulfilled, (state, action) => {
      if (action.payload) {
        if (state.find((user) => user.id === action.payload?.id)) {
          return state;
        } else {
          state.push(action.payload);
        }
      }
    });
  },
});

export default userSlice.reducer;
