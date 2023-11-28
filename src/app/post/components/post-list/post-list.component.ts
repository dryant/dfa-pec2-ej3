import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  constructor(private router: Router) {}
  newpost(): void {
    this.router.navigateByUrl('newpost');
  }
}
