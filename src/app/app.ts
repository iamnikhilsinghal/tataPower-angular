import { Component } from '@angular/core';
import { Lifecycle } from './components/lifecycle/lifecycle';
// import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, RouterModule],
  imports: [Lifecycle],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'my-angular-app';
}
