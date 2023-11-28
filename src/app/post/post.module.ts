import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { postReducer } from './reducers/post.reducers';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostItemComponent,
    PostListComponent,
    PostListComponent,
    DashboardComponent,
    PostFormComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({ post: postReducer }),
    ReactiveFormsModule,
  ],
  exports: [PostItemComponent, PostListComponent],
})
export class PostModule {}
