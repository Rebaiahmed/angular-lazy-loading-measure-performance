import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CA2Component } from './c-a2.component';

describe('CA2Component', () => {
  let component: CA2Component;
  let fixture: ComponentFixture<CA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CA2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
