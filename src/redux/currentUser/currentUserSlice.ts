import { createSlice } from '@reduxjs/toolkit';
import { CurrentUserType } from '../../types';
import { userPresence } from '../user/thunks';

const initialStateJSON = localStorage.getItem('currentUser');

const initialState: CurrentUserType = initialStateJSON
  ? JSON.parse(initialStateJSON)
  : { email: '', id: '' };

const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    userLogout: (state) => {
      state.id = '';
      state.registrationDate = '';
      state.email = '';
    },
  },
  extraReducers(builder) {
    builder.addCase(userPresence.fulfilled, (state, action) => {
      if (action.payload) {
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
        return action.payload;
      }
    });
  },
});

export const { userLogout } = userSlice.actions;

export default userSlice.reducer;
