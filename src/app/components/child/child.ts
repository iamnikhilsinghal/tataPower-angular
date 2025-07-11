import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: `
    Country coming from parent- {{ country }}
    <br />
    <button (click)="sendCountry()">Send Country to Parent</button>
    <button (click)="sendCountry2()">Send Country to Parent 2</button>
  `,
  styleUrl: './child.scss',
})
export class Child {
  @Input() country!: string;
  @Output() countryFromChild = new EventEmitter<string>();

  sendCountry() {
    this.countryFromChild.emit('USA');
  }

  sendCountry2() {
    this.countryFromChild.emit('Japan');
  }
}
