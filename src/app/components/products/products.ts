import { Component } from '@angular/core';
import { GreetingPipe } from '../../pipes/greeting-pipe';
import { User } from '../../services/user';

@Component({
  selector: 'app-products',
  imports: [GreetingPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  num = 20;
  msg: string = '';

  constructor(private userService: User) {}

  ngOnInit(): void {
    this.msg = this.userService.display();
  }
}
