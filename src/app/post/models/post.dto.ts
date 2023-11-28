// import { CategoryDTO } from './category.dto';

export class PostDTO {
  postId!: string;
  title: string;
  description: string;
  num_likes: number;
  num_dislikes!: number;
  publication_date: Date;
  //   categories!: CategoryDTO[];
  userId!: string;
  userAlias!: string;

  constructor(
    title: string,
    description: string,
    num_likes: number,
    num_dislikes: number,
    publication_date: Date,
    postId: string,
    userId: string,
    userAlias: string
  ) {
    this.postId = postId;
    this.title = title;
    this.description = description;
    this.num_likes = num_likes;
    this.num_dislikes = num_dislikes;
    this.publication_date = publication_date;
    // this.categories = [];
    this.userId = userId;
    this.userAlias = userAlias;
  }
}
