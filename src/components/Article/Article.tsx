import React, { useState } from 'react';
import dayjs from 'dayjs';
import { ArticleType } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  addNewArticleName,
  addNewArticleText,
  removeArticle,
} from '../../redux/articles/thunks';
import {
  ArticleLi,
  ArticleContainer,
  RemoveButton,
  EditButton,
} from './Article.styltd';
import { Link } from 'react-router-dom';
import { Button, Input, Label } from '../../App.styled';

interface Props {
  article: ArticleType;
}

function Article({ article }: Props) {
  const [isEditingArticleName, setIsEditingArticleName] = useState(false);
  const [newArticleName, setNewArticleName] = useState(article.articleName);
  const [isEditingArticleText, setIsEditingArticleText] = useState(false);
  const [newArticleText, setNewArticleText] = useState(article.articleText);

  const { currentUser } = useAppSelector((state) => ({
    currentUser: state.currentUser,
  }));

  const dispatch = useAppDispatch();

  const onClickRemoveArticle = () => {
    dispatch(removeArticle(article.id));
  };

  const onClickEditArticleName = () => {
    setIsEditingArticleName(true);
  };

  const handleSaveArticleName = () => {
    dispatch(
      addNewArticleName({
        ...article,
        articleName: newArticleName,
        articleDate: dayjs().format('DD.MM.YYYY HH:mm'),
      }),
    );
    setIsEditingArticleName(false);
  };

  const onClickEditArticleText = () => {
    setIsEditingArticleText(true);
  };

  const handleSaveArticleText = () => {
    dispatch(
      addNewArticleText({
        ...article,
        articleText: newArticleText,
        articleDate: dayjs().format('DD.MM.YYYY HH:mm'),
      }),
    );
    setIsEditingArticleText(false);
  };

  return (
    <ArticleLi>
      {article.articleAuthor === currentUser.email && (
        <RemoveButton
          type='button'
          onClick={onClickRemoveArticle}
          title='Remove article'
        >
          &#10006;
        </RemoveButton>
      )}

      {isEditingArticleName && (
        <form>
          <Label>
            <Input
              type='text'
              name='name'
              autoComplete='off'
              value={newArticleName}
              onChange={(e) => setNewArticleName(e.target.value)}
            />
          </Label>
          <Button type='button' onClick={handleSaveArticleName} title='submit'>
            &#10004;
          </Button>
        </form>
      )}
      {!isEditingArticleName && article.articleAuthor === currentUser.email && (
        <ArticleContainer>
          <Link to={`/articleItem/${article.id}`}>{article.articleName}</Link>
          <EditButton type='button' onClick={onClickEditArticleName}>
            &#9998;
          </EditButton>
        </ArticleContainer>
      )}
      {!isEditingArticleName && article.articleAuthor != currentUser.email && (
        <>
          <Link to={`/articleItem/${article.id}`}>{article.articleName}</Link>
        </>
      )}

      {isEditingArticleText && (
        <form>
          <Label>
            <Input
              type='text'
              name='name'
              autoComplete='off'
              value={newArticleText}
              onChange={(e) => setNewArticleText(e.target.value)}
            />
          </Label>
          <Button type='button' onClick={handleSaveArticleText} title='submit'>
            &#10004;
          </Button>
        </form>
      )}
      {!isEditingArticleText && article.articleAuthor === currentUser.email && (
        <ArticleContainer>
          <p>{article.articleText}</p>
          <EditButton type='button' onClick={onClickEditArticleText}>
            &#9998;
          </EditButton>
        </ArticleContainer>
      )}
      {!isEditingArticleText && article.articleAuthor != currentUser.email && (
        <p>{article.articleText}</p>
      )}
      <Link to={`/userItem/${article.perrentId}`}>{article.articleAuthor}</Link>
      <p>{article.articleDate}</p>
    </ArticleLi>
  );
}

export default Article;
