import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F3Component } from './f3.component';

describe('F3Component', () => {
  let component: F3Component;
  let fixture: ComponentFixture<F3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
