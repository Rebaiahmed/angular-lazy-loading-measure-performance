import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CA3Component } from './c-a3.component';

describe('CA3Component', () => {
  let component: CA3Component;
  let fixture: ComponentFixture<CA3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CA3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
