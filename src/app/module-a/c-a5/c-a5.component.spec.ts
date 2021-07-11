import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CA5Component } from './c-a5.component';

describe('CA5Component', () => {
  let component: CA5Component;
  let fixture: ComponentFixture<CA5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CA5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CA5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
