import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterModule],
  template: `<h1>Please enter a valid path</h1>
    Go to <a routerLink="/">Home</a>`,
  // templateUrl: './page-not-found.html',
  // styleUrl: './page-not-found.scss',
})
export class PageNotFound {}
