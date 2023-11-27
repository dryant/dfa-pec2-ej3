import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [PostItemComponent, PostListComponent, PostListComponent, DashboardComponent],
  imports: [CommonModule],
  exports: [PostItemComponent, PostListComponent],
})
export class PostModule {}
