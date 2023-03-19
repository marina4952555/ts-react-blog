import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ArticleType } from '../../types';
import { baseUrl } from '../common/thunks';

export const addNewArticle = createAsyncThunk(
  'addNewArticle',
  async (article: ArticleType) => {
    await axios.post(`${baseUrl}/articles`, article);

    return {
      article,
    };
  },
);

export const removeArticle = createAsyncThunk(
  'removeArticle',
  async (id: string) => {
    await axios.delete(`${baseUrl}/articles/${id}`);

    return id;
  },
);

export const addNewArticleName = createAsyncThunk(
  'addNewArticleName',
  async (article: ArticleType) => {
    await axios.put(`${baseUrl}/articles/${article.id}`, {
      articleAuthor: article.articleAuthor,
      articleDate: article.articleDate,
      id: article.id,
      articleName: article.articleName,
      articleText: article.articleText,
    });

    return article;
  },
);

export const addNewArticleText = createAsyncThunk(
  'addNewArticleText',
  async (article: ArticleType) => {
    await axios.put(`${baseUrl}/articles/${article.id}`, {
      articleAuthor: article.articleAuthor,
      articleDate: article.articleDate,
      id: article.id,
      articleName: article.articleName,
      articleText: article.articleText,
    });

    return article;
  },
);
