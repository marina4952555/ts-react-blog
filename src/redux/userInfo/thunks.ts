import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserInfoType } from '../../types';
import { baseUrl } from '../common/thunks';

export const addUserInfo = createAsyncThunk(
  'addUserInfo',
  async (userInfo: UserInfoType) => {
    await axios.post(`${baseUrl}/userInfo`, userInfo);

    return {
      userInfo,
    };
  },
);
