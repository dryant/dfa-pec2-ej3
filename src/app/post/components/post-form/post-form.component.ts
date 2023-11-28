import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { v4 as uuidv4 } from 'uuid';
import { createPost } from '../../actions/post.actions';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  public titleInput: FormControl;
  public descriptionInput: FormControl;
  public dateInput: FormControl;
  // public categoriesInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.titleInput = new FormControl('', Validators.required);
    this.descriptionInput = new FormControl('', Validators.required);
    this.dateInput = new FormControl('', Validators.required);
    // this.categoriesInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  addNewPost() {
    // if (this.titleInput.valid) {
    const newPost = {
      postId: uuidv4(),
      title: this.titleInput.value,
      description: this.descriptionInput.value,
      // categories: this.categoriesInput.value.split(','),
      num_likes: 0,
      num_dislikes: 0,
      publication_date: new Date(this.dateInput.value),
      userId: '1',
      userAlias: 'dryabt',
    };
    console.log(newPost.userAlias);
    console.log(newPost.userId);
    console.log(newPost.postId);

    this.store.dispatch(createPost(newPost));
    this.titleInput.reset();
    this.descriptionInput.reset();
    this.dateInput.reset();
    // this.categoriesInput.reset();
    // }
  }
}
