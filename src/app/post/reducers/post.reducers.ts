import { createReducer, on } from '@ngrx/store';
import { getAllPosts } from '../actions/post.actions';
import { PostDTO } from '../models/post.dto';

// Define el estado inicial
// export const initialState: PostDTO[] = [];
export const initialState: PostDTO[] = [
  new PostDTO(
    'Titulo post 1',
    'Descripcion post 1',
    3,
    5,
    new Date('2022-01-19')
  ),
];

// Crea el reducer utilizando createReducer
const _postReducer = createReducer(
  initialState,
  on(getAllPosts, (state) => ({ ...state, loading: true }))
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
