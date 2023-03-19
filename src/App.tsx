import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './pages/UserListPage';
import UserItem from './pages/UserItem';
import Layout from './pages/Layout';
import NewsList from './pages/NewsListPage';
import Authorization from './pages/AuthorizationPage';
import ArticleItem from './pages/ArticleItemPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='userList' element={<UserList />} />
          <Route path='userItem/:id' element={<UserItem />} />
          <Route index element={<NewsList />} />
          <Route path='Authorization' element={<Authorization />} />
          <Route path='articleItem/:id' element={<ArticleItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
