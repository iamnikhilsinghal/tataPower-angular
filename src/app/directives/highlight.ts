import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  
  private el = inject(ElementRef);

  constructor() {
    // document.getElementById('id')?.style.backgroundColor
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
