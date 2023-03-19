import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserInfoType, ArticleType, UsersType, CommentType } from '../../types';

export const baseUrl = 'http://localhost:3001';

export const fetchInitialData = createAsyncThunk(
  'fetawaitchInitialData',
  async () => {
    try {
      const [articles, users, comments, userInfo] = await Promise.all([
        axios.get<ArticleType[]>(`${baseUrl}/articles`),
        axios.get<UsersType[]>(`${baseUrl}/users`),
        axios.get<CommentType[]>(`${baseUrl}/comments`),
        axios.get<UserInfoType[]>(`${baseUrl}/userInfo`),
      ]);

      return {
        articles: articles.data,
        users: users.data,
        comments: comments.data,
        userInfo: userInfo.data,
      };
    } catch (e) {
      console.log(e);
    }
  },
);
