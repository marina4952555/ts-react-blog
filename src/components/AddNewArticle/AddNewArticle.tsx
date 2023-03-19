import React, { useState } from 'react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addNewArticle } from '../../redux/articles/thunks';
import { Button, ErrorText, Input, Label, Textarea } from '../../App.styled';
import { NewArticle } from './AddNewArticle.styled';

function AddNewArticle() {
  const [articleName, setArticleName] = useState('');
  const [articleText, setArticleText] = useState('');
  const [isErrorArticleName, setIsErrorArticleName] = useState(false);
  const [isErrorArticleText, setIsErrorArticleText] = useState(false);

  const dispatch = useAppDispatch();

  const { currentUser } = useAppSelector((state) => ({
    currentUser: state.currentUser,
  }));

  const saveArticle = () => {
    if (articleName && articleText && currentUser.email && currentUser.id) {
      dispatch(
        addNewArticle({
          articleAuthor: currentUser.email,
          articleName: articleName,
          articleText: articleText,
          articleDate: dayjs().format('DD.MM.YYYY HH:mm'),
          id: uuidv4(),
          perrentId: currentUser.id,
        }),
      );
      setArticleName('');
      setIsErrorArticleName(false);
      setArticleText('');
      setIsErrorArticleText(false);
    } else {
      setIsErrorArticleName(true);
      setIsErrorArticleText(true);
    }
  };

  return (
    <NewArticle>
      <Label>
        <Input
          type='text'
          name='name'
          autoComplete='off'
          value={articleName}
          placeholder='Article heading'
          onChange={(e) => setArticleName(e.target.value)}
        />
      </Label>
      <Label>
        <Textarea
          name='name'
          autoComplete='off'
          value={articleText}
          placeholder='Article text'
          onChange={(e) => setArticleText(e.target.value)}
        />
      </Label>
      {isErrorArticleName && (
        <ErrorText>Please enter the name of your artikle</ErrorText>
      )}
      {isErrorArticleText && (
        <ErrorText>Please enter the text of your artikle</ErrorText>
      )}
      <Button onClick={saveArticle}>save</Button>
    </NewArticle>
  );
}

export default AddNewArticle;
