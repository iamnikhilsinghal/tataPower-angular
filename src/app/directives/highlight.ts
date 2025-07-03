import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight implements OnInit {
  private el = inject(ElementRef);
  appHighlight = input();
  textColor = input();

  constructor() {
    console.log('inside constructor', this.textColor());
    // document.getElementById('id')?.style.backgroundColor
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  // The ngOnInit method runs after Angular has initialized
  // all the components inputs with their initial values.
  ngOnInit(): void {
    console.log('inside ngOnInit0', this.textColor());
    this.el.nativeElement.style.backgroundColor = this.appHighlight() || 'yellow';
    this.el.nativeElement.style.color = this.textColor() || 'green';
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}
