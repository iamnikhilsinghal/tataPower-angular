import { Component } from '@angular/core';
import { Child } from './components/child/child';
// import { Lifecycle } from './components/lifecycle/lifecycle';
// import { CommonModule } from '@angular/common';
// import { Lifecycle2 } from './components/lifecycle2/lifecycle2';
// import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, RouterModule],
  // imports: [Lifecycle, CommonModule],
  // imports: [Lifecycle2],
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'my-angular-app';
  firstName = 'Rahul';
  personObj = { name: 'Nikhil' };
  showLifecycle = true;
  countryFromParent = 'India';
  childCountry = '';

  recievedCountry(xyz: any) {
    console.log('country coming from child is-', xyz);
    this.childCountry = xyz;
  }

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
