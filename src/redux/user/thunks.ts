import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { UsersType } from '../../types';
import { baseUrl } from '../common/thunks';

export const userPresence = createAsyncThunk(
  'userPresence',
  async (email: string) => {
    try {
      const registeredUser = await axios.get<UsersType[]>(`${baseUrl}/users`, {
        params: {
          email,
        },
      });

      if (registeredUser.data.length) {
        return registeredUser.data[0];
      } else {
        const newUser = {
          email,
          registrationDate: dayjs().format('DD.MM.YYYY HH:mm'),
          id: uuidv4(),
        };

        await axios.post(`${baseUrl}/users`, newUser);

        return newUser;
      }
    } catch (e) {
      console.log(e);
    }
  },
);
