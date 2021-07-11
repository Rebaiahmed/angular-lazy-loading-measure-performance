import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CA4Component } from './c-a4.component';

describe('CA4Component', () => {
  let component: CA4Component;
  let fixture: ComponentFixture<CA4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CA4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CA4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
