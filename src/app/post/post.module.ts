import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './reducers/post.reducers';

@NgModule({
  declarations: [
    PostItemComponent,
    PostListComponent,
    PostListComponent,
    DashboardComponent,
  ],
  imports: [CommonModule, StoreModule.forRoot({ post: postReducer })],
  exports: [PostItemComponent, PostListComponent],
})
export class PostModule {}
