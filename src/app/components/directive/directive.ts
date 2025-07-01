import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.html',
  styleUrl: './directive.scss',
})
export class Directive {
  gender = 'male';
  hobbies = ['cricket', 'coding', 'reading'];
  color = 'red11';

  isDanger = true;
}

// he/she is a painter
