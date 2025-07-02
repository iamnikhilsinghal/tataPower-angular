import { Component } from '@angular/core';
import { Highlight } from '../../directives/highlight';
import { DatePipe, JsonPipe, SlicePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [Highlight, TitleCasePipe, DatePipe, JsonPipe, SlicePipe],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
  amount = 123.45;
  company = 'acme corporation';
  // purchasedOn = '2024-07-08';
  // purchasedOn = '08-10-2023';
  // purchasedOn = '30-July-2029';
  purchasedOn = 'Mar 25 2022 05:30:00';
  arr = [
    { age: 20, city: 'Delhi' },
    { age: 50, city: 'Noida' },
  ];
  collection: string[] = ['a', 'b', 'c', 'd'];
}

// backend data format- pipe integrate in service
// async pipe- backend load
