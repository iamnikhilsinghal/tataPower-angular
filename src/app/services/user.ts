import { Injectable } from '@angular/core';

// dependecy injection
@Injectable({
  providedIn: 'root',
})
export class User {
  constructor() {}

  display() {
    return 'I am displaying data from service';
  }

  // HW-  api call

  // https://angular.dev/guide/components/lifecycle

  // https://angular.dev/tutorials/first-app/09-services
}

// created comp Users- ng g c components/users
// created service- ng g service services/user

// @Injectable({
//   providedIn: 'root'
// })
// single instance through out the application
