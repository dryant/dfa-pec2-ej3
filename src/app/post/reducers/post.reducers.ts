import { createReducer, on } from '@ngrx/store';
import { createPost, getAllPosts } from '../actions/post.actions';
import { PostDTO } from '../models/post.dto';

// Define el estado inicial
// export const initialState: PostDTO[] = [];
export const initialState: PostDTO[] = [
  new PostDTO(
    'Titulo post 1',
    'Descripcion post 1',
    3,
    5,
    new Date('2022-01-19'),
    '125547',
    '12',
    'dryant'
  ),
];
// Crea el reducer utilizando createReducer
const _postReducer = createReducer(
  initialState,
  on(getAllPosts, (state) => ({ ...state, loading: true })),
  on(
    createPost,
    (
      state,
      {
        title,
        description,
        // categories,
        num_likes,
        num_dislikes,
        publication_date,
        postId,
        userId,
        userAlias,
      }
    ) => {
      console.log('Create post action received:', {
        title,
        description,
        // categories,
        num_likes,
        num_dislikes,
        publication_date,
        postId,
        userId,
        userAlias,
      });

      const newPost: PostDTO = {
        postId,
        title,
        description,
        num_likes,
        num_dislikes,
        publication_date,
        // categories,
        userId,
        userAlias,
      };
      return [...state, newPost];
    }
  )
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
