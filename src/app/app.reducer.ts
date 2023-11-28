import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { PostDTO } from './post/models/post.dto';
import { createPost, getAllPosts } from './post/actions/post.actions';

export interface AppState {
  posts: PostDTO[];
}

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

const _postReducer = createReducer(
  initialState,
  on(getAllPosts, (state) => ({ ...state, loading: true })),
  on(createPost, (state, newPost) => [newPost, ...state])
);

export function postReducer(state: PostDTO[] | undefined, action: any) {
  return _postReducer(state, action);
}

export const appReducer: ActionReducerMap<AppState> = {
  posts: postReducer,
};
