import { Injectable } from '@angular/core';
import { DemoService } from './demo-service';
import { HttpClient } from '@angular/common/http';

// dependecy injection
@Injectable({
  providedIn: 'root',
})
export class RootService {
  constructor(private demoService: DemoService, private http: HttpClient) {}

  display() {
    this.demoService.displayDemoData();
    return 'I am displaying data from root service';
  }

  getApiData() {
    // return this.http.get('https://reqres.in/api/users?page=2');
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
// Scope: Singleton instance shared across the entire app.
// Use case: When the service needs to be accessed globally (e.g., AuthService, UserService, etc.).
// Automatically tree-shaken if unused.
// No need to register in providers array
