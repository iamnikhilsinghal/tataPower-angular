import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users implements OnInit {
  msg: string = '';

  // service injected in a component
  constructor(private userService: User) {}

  ngOnInit(): void {
    this.msg = this.userService.display();
  }
}
