import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employees } from '../crud-table/dummy-data';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  id!: number;
  users = Employees;

  currentUser = {};
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log('users', this.users);

    this.id = this.activatedRoute.snapshot.params['id'];
    console.log('new id', this.activatedRoute.snapshot.params['id']);
    this.currentUser = this.users.filter((user) => user.id == this.id);

    console.log('this.currentUser', this.currentUser);

    // call api based on the id
  }
}
