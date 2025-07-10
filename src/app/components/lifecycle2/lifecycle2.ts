import {
  Component,
  ContentChild,
  AfterContentInit,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-c',
  template: `
    <p>I am C.</p>
    <p>Hello World!</p>
  `,
})
export class CComponent {}

// ng-content- used to load the content of a selector
// e.g
// <comp-name>
// 	content
// </comp-name>

// @ContentChild - used to use the references and child selectors inside
// content

@Component({
  selector: 'app-b',
  template: `
    <p>I am B.</p>
    <button (click)="($event)">CLICK</button>
    <ng-content></ng-content>
  `,
})
export class BComponent {
  @ContentChild('BHeader', { read: ElementRef }) hRef!: ElementRef;
  @ContentChild(CComponent, { read: ElementRef }) cRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  // when your content is initialized
  // ngAfterContentInit() {
  //   this.renderer.setStyle(
  //     this.hRef.nativeElement,
  //     'background-color',
  //     'yellow'
  //   );

  //   this.renderer.setStyle(
  //     this.cRef.nativeElement.children.item(0),
  //     'background-color',
  //     'pink'
  //   );
  //   this.renderer.setStyle(
  //     this.cRef.nativeElement.children.item(1),
  //     'background-color',
  //     'red'
  //   );
  // }

  randomRGB(): string {
    console.log('randomRGB called');

    return `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
  }

  // ngAfterContentChecked fires after every cycle of change detection
  //  targeting the content DOM.
  //  ngAfterContentChecked fires during a component’s initialization
  //  stages too. It comes right after ngAfterContentInit.

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
    this.renderer.setStyle(
      this.hRef.nativeElement,
      'background-color',
      this.randomRGB()
    );
    this.renderer.setStyle(
      this.cRef.nativeElement.children.item(0),
      'background-color',
      this.randomRGB()
    );
    this.renderer.setStyle(
      this.cRef.nativeElement.children.item(1),
      'background-color',
      this.randomRGB()
    );
  }
}

@Component({
  selector: 'app-lifecycle2',
  template: `
    <h1>ngAfterContentInit Example</h1>
    <p>I am A.</p>
    <app-b>
      <h3 #BHeader>BComponent Content DOM</h3>
      <app-c></app-c>
    </app-b>
  `,
  imports: [BComponent, CComponent],
})
export class Lifecycle2 {}
