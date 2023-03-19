import { createSlice } from '@reduxjs/toolkit';
import { ArticleType } from '../../types';
import { fetchInitialData } from '../common/thunks';
import {
  addNewArticle,
  removeArticle,
  addNewArticleName,
  addNewArticleText,
} from './thunks';

const initialState = [] as ArticleType[];

const articlesSlice = createSlice({
  name: 'articleList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchInitialData.fulfilled, (_, action) => {
      if (action.payload) {
        const { articles } = action.payload;

        if (articles) {
          return articles;
        }
      }
    });
    builder.addCase(addNewArticle.fulfilled, (state, action) => {
      state.push(action.payload.article);
    });
    builder.addCase(removeArticle.fulfilled, (state, action) => {
      return state.filter(
        (article: ArticleType) => article.id !== action.payload,
      );
    });
    builder.addCase(addNewArticleName.fulfilled, (state, action) => {
      return state.map((article) => {
        if (article.id === action.payload.id) {
          return action.payload;
        }

        return article;
      });
    });
    builder.addCase(addNewArticleText.fulfilled, (state, action) => {
      return state.map((article) => {
        if (article.id === action.payload.id) {
          return action.payload;
        }

        return article;
      });
    });
  },
});

export default articlesSlice.reducer;
