import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostModule } from './post/post.module';
import { SharedModule } from './shared/shared.module';
import { CategoryModule } from './category/category.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PostModule,
    CategoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
