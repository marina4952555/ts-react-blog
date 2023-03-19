import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import Article from '../Article';
import UserList from '../UsersList/UserList';
import AddNewArticle from '../AddNewArticle';

const UserItem = () => {
  const { currentUser, articleList } = useAppSelector((state) => ({
    currentUser: state.currentUser.email,
    articleList: state.articles,
  }));

  return (
    <main>
      <div>{currentUser && <h2>{currentUser}</h2>}</div>
      <div>
        <AddNewArticle />
        <ul>
          {articleList.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </div>
      <div>
        <UserList />
      </div>
    </main>
  );
};

export default UserItem;
