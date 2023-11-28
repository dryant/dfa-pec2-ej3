import { createAction, props } from '@ngrx/store';

export const getAllPosts = createAction('[GetAllPosts] Get all posts');

export const createPost = createAction(
  '[POST] Create Post',
  props<{
    title: string;
    description: string;
    // categories: string[];
    num_likes: number;
    num_dislikes: number;
    publication_date: Date;
    postId: string;
    userId: string;
    userAlias: string;
  }>()
);
