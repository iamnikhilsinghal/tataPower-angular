import { Component, OnInit } from '@angular/core';
import { RootService } from '../../services/root-level-service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  msg: string = '';
  userData: any = [];

  // service injected in a component
  constructor(private rootService: RootService) {}

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
