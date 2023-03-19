export type CurrentUserType = {
  email: string;
  registrationDate: string;
  id: string;
};

export type ArticleType = {
  articleAuthor: string;
  articleName: string;
  articleText: string;
  articleDate: string;
  id: string;
  perrentId: string;
};

export type UsersType = {
  email: string;
  registrationDate: string;
  id: string;
};

export type UserInfoType = {
  firstName: string;
  surName: string;
  id: string;
};

export type CommentType = {
  commentAuthor: string;
  commentText: string;
  commentDate: string;
  perrentId: string;
  id: string;
};
