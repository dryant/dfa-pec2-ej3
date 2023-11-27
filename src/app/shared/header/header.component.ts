import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  categories(): void {
    this.router.navigateByUrl('categories');
  }
  login(): void {
    this.router.navigateByUrl('login');
  }
  dashboard(): void {
    this.router.navigateByUrl('dashboard');
  }
  register(): void {
    this.router.navigateByUrl('register');
  }
  profile(): void {
    this.router.navigateByUrl('profile');
  }
  posts(): void {
    this.router.navigateByUrl('posts');
  }
  home(): void {
    this.router.navigateByUrl('home');
  }
  logout(): void {
    this.router.navigateByUrl('home');
  }
}
