import { Component, OnInit } from '@angular/core';
import { RootService } from '../../services/root-level-service';
import { delay, Observable, of } from 'rxjs';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [AsyncPipe, JsonPipe, CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  msg: string = '';
  userData: any = [];
  // delayedValue$ = of('Loaded after delay').pipe(delay(5000));
  delayedValue$: Observable<any>;
  arr = [
    { fname: 'Sujit', age: 33 },
    { fname: 'Sweata', age: 33 },
  ];

  // service injected in a component
  constructor(private rootService: RootService) {
    this.delayedValue$ = this.rootService.getDelayedData();
  }

  // subscribe is a method to observe the observable,
  // so subscribe is an observer
  ngOnInit(): void {
    this.msg = this.rootService.display();
    this.rootService.getApiData().subscribe((data) => {
      this.userData = data;
      console.log('api data', this.userData);
    });
  }
}

// api method
// http client service
// provide httpclient in the app config
// subscribe the service in the comp file
// assign the data in local comp variable
