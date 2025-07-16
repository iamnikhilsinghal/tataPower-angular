import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-paginated-table',
  imports: [NgxPaginationModule, CommonModule],
  templateUrl: './paginated-table.html',
  styleUrl: './paginated-table.scss',
})
export class PaginatedTable {
  collection: string[] = [];
  pageNo = 1;
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
}
