import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { PostItemComponent } from './post/post-item/post-item.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: '/categories',
    component: CategoryListComponent,
  },
  {
    path: 'user/category/:id',
    component: CategoryFormComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
