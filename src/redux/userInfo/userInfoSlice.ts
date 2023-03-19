import { createSlice } from '@reduxjs/toolkit';
import { UserInfoType } from '../../types';
import { fetchInitialData } from '../common/thunks';
import { addUserInfo } from './thunks';

const initialState = [] as UserInfoType[];

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchInitialData.fulfilled, (_, action) => {
      if (action.payload) {
        const { userInfo } = action.payload;

        if (userInfo) {
          return userInfo;
        }
      }
    });
    builder.addCase(addUserInfo.fulfilled, (state, action) => {
      state.push(action.payload.userInfo);
    });
  },
});

export default userInfoSlice.reducer;
