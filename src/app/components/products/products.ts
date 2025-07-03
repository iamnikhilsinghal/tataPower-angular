import { Component } from '@angular/core';
import { GreetingPipe } from '../../pipes/greeting-pipe';

@Component({
  selector: 'app-products',
  imports: [GreetingPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  num = 20;
}
