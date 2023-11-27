import { PostDTO } from './post/models/post.dto';

export interface AppState {
  posts: PostDTO[];
}
