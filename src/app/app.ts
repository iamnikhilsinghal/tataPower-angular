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
  personObj = { name: 'Nikhil' };
  showLifecycle = true;

  changeName() {
    // Doesn't change reference — ngOnChanges won't be called
    this.personObj.name = 'Singhal';
  }
  changeReference() {
    // Changes reference — ngOnChanges will be called
    this.personObj = { name: 'Changed Reference' };
  }
}

// Route guard
// https://raghuvardhankaranam.medium.com/route-guards-in-angular-c2c01fe6167b
