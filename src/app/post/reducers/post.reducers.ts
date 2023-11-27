import { createReducer, on } from '@ngrx/store';
import { getAllPosts } from '../actions/post.actions';
import { PostDTO } from '../models/post.dto';

// Define el estado inicial
export const initialState: PostDTO[] = [];

// Crea el reducer utilizando createReducer
const _postReducer = createReducer(
  initialState,
  on(getAllPosts, (state) => ({ ...state, loading: true }))
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
