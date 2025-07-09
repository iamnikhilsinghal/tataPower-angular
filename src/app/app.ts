import { Component } from '@angular/core';
import { Lifecycle } from './components/lifecycle/lifecycle';
import { CommonModule } from '@angular/common';
// import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, RouterModule],
  imports: [Lifecycle, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'my-angular-app';
  firstName = 'Rahul';
  showLifecycle = true;
}
