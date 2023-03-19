import { configureStore } from '@reduxjs/toolkit';
import userSlice from './currentUser/currentUserSlice';
import articlesSlice from './articles/articlesSlice';
import usersSlice from './user/usersSlice';
import commentSlice from './comments/commentSlice';
import userInfoSlice from './userInfo/userInfoSlice';

export const store = configureStore({
  reducer: {
    currentUser: userSlice,
    articles: articlesSlice,
    users: usersSlice,
    userInfo: userInfoSlice,
    comments: commentSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
