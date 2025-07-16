import { Component } from '@angular/core';
import { Employees } from './dummy-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-table',
  imports: [],
  templateUrl: './crud-table.html',
  styleUrl: './crud-table.scss',
})
export class CrudTable {
  users = Employees;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('users', this.users);
  }

  handleRowClick(id: number) {
    console.log('id', id);
    this.router.navigate([`/users/${id}`]);
    // users/:id
  }
}
