import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  private el = inject(ElementRef);

  // constructor() {
  //   // document.getElementById('id')?.style.backgroundColor
  //   this.el.nativeElement.style.backgroundColor = 'red';
  // }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
