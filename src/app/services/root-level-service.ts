import { Injectable } from '@angular/core';
import { DemoService } from './demo-service';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';

// dependecy injection
@Injectable({
  providedIn: 'root',
})
export class RootService {
  constructor(private demoService: DemoService, private http: HttpClient) {}

  display() {
    // this.demoService.displayDemoData();
    return 'I am displaying data from root service';
  }

  // Observable: The source that emits values.
  // observable
  getApiData(): Observable<any> {
    // return this.http.get('https://reqres.in/api/users?page=2');
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  // timeout(3000) VS delay(3000)
  // timeout will wait at max upto 3s if resp didnt come in this 3s, then it will give error
  // delay will return the output after 3s
  // delay= setTimeout
  // of operator is converting this static string into observale
  // pipe is use to join obervable and delay
  // delay is working as settimeout for returning data after 5s
  getDelayedData() {
    // return of('Loaded after delay').pipe(delay(5000));
    return of([
      { fname: 'Nikhil', age: 33 },
      { fname: 'harshit', age: 33 },
    ]).pipe(delay(3000));
  }
}
// Scope: Singleton instance shared across the entire app.
// Use case: When the service needs to be accessed globally (e.g., AuthService, UserService, etc.).
// Automatically tree-shaken if unused.
// No need to register in providers array
