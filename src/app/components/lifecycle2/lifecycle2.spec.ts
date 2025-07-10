import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle2 } from './lifecycle2';

describe('Lifecycle2', () => {
  let component: Lifecycle2;
  let fixture: ComponentFixture<Lifecycle2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lifecycle2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lifecycle2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
