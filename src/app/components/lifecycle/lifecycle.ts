import {
  Component,
  input,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.scss',
})
export class Lifecycle implements OnChanges, OnInit {
  @Input() fname!: string; // Input Decorator
  // fname = input<string>(); // signal

  constructor() {
    console.log('constructor called', this.fname);
  }

  // multiple time- input changes,
  // first time value set input
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', this.fname);
  }

  // called only once when comp initilize
  ngOnInit(): void {
    console.log('ngOnInit called', this.fname);
  }
}
