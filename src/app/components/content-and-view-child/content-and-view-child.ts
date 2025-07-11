import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-and-view-child',
  imports: [],
  template: `<ng-content></ng-content>
    <p #abc>Demo ngAfterViewInit Para</p>
    <button (click)="change()">call after view checked</button> `,
  styleUrl: './content-and-view-child.scss',
})
export class ContentAndViewChild {
  @ContentChild('projectedParagraph') contentPara!: ElementRef;
  @ViewChild('abc') ViewChildPara!: ElementRef;

  ngOnInit() {
    console.log('aaa');
    // console.log('ngOnInit', this.ViewChildPara.nativeElement.innerText);
    // console.log('ngOnInit', this.contentPara.nativeElement.innerText); // "Hello"
  }

  change() {
    this.ViewChildPara.nativeElement.innerText = 'ewufgewuohfew;oih';
  }

  // we can access 'ContentChild' values inside this
  ngAfterContentInit() {
    console.log('ngAfterContentInit', this.contentPara.nativeElement.innerText); // "Hello"
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  // we can access 'ViewChild' values inside this
  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.ViewChildPara.nativeElement.innerText);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
}
