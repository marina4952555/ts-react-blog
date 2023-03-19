import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UsersType } from '../../types';
import { baseUrl } from '../common/thunks';

export const userRegistration = createAsyncThunk(
  'userRegistration',
  async (user: UsersType) => {
    await axios.post(`${baseUrl}/users`, user);

    return {
      user,
    };
  },
);
