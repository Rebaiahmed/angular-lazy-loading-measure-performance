import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CA1Component } from './c-a1.component';

describe('CA1Component', () => {
  let component: CA1Component;
  let fixture: ComponentFixture<CA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CA1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
