import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-lazy',
  imports: [],
  templateUrl: './lazy.html',
  styleUrl: './lazy.scss',
})
export class Lazy {
  // const mySignal = signal(initialValue);

  // x = 5;
  // y = 10;
  // sum = 0;

  // ngOnInit() {
  //   this.sum = this.x + this.y;
  //   console.log('this.sum', this.sum);
  //   this.y = 8;
  //   console.log('this.sum 2', this.sum);
  // }

  constructor() {
    const count = signal(0);
    const count2 = signal(0);

    effect(() => {
      console.log(`Count changed to: ${count()} ${count2()}`);
      // search query
      // task signal(variable) depend
    });

    count.set(1);
    count.set(2);
    count.set(3);
    count2.set(16);
  }

  ngOnInit() {
    localStorage.setItem('local_key', 'Ram');

    // const x = signal(2);
    // const y = signal(3);
    // const sum = computed(() => x() + y());
    // console.log('sum 1', sum()); // Outputs: 5
    // // Update one of the signals
    // x.set(5);
    // console.log('sum 2', sum()); //8
  }
}
