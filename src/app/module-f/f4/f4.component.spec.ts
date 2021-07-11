import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F4Component } from './f4.component';

describe('F4Component', () => {
  let component: F4Component;
  let fixture: ComponentFixture<F4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
