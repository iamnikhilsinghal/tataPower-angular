import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor() {}

  displayDemoData() {
    console.log('I display DemoService data');
  }
}

// we can inject a service inside a component or another service
