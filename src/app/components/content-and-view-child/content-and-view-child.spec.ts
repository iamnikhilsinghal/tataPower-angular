import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAndViewChild } from './content-and-view-child';

describe('ContentAndViewChild', () => {
  let component: ContentAndViewChild;
  let fixture: ComponentFixture<ContentAndViewChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentAndViewChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentAndViewChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
