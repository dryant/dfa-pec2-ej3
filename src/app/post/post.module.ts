import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [PostItemComponent, PostListComponent, PostListComponent],
  imports: [CommonModule],
  exports: [PostItemComponent, PostListComponent],
})
export class PostModule {}
