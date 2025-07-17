import { Component } from '@angular/core';
import { Employees } from './dummy-data';
import { Router } from '@angular/router';

interface USER {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-crud-table',
  imports: [],
  templateUrl: './crud-table.html',
  styleUrl: './crud-table.scss',
})
export class CrudTable {
  users: USER[] = Employees;
  myLocalKey = localStorage.getItem('local_key');

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('users', this.users);
  }

  handleRowClick(id: number) {
    console.log('id', id);
    this.router.navigate([`/users/${id}`]);
    // users/:id
  }

  ngOnDestroy() {
    localStorage.removeItem('local_key');
    // localStorage.clear()
  }
}
