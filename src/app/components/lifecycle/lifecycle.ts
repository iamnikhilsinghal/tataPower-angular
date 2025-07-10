import {
  Component,
  input,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.scss',
})
export class Lifecycle {
  @Input() fname!: string; // Input Decorator
  // fname = input<string>(); // signal
  @Input() person!: { name: string };
  prevName = '';

  constructor() {
    console.log('constructor called', this.person);
  }

  // multiple time- input changes from parent,
  // first time value set input
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes', changes);
    console.log('ngOnChanges called', this.person);
  }

  // called only once when comp initilize
  ngOnInit(): void {
    console.log('ngOnInit called', this.person);
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck called');
    if (this.person?.name !== this.prevName) {
      console.log(
        'ngDoCheck - name changed from',
        this.prevName,
        'to',
        this.person?.name
      );
      this.prevName = this.person?.name ?? '';
    }
  }

  // called when comp removed from DOM
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
