import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cc11Component } from './cc11.component';

describe('Cc11Component', () => {
  let component: Cc11Component;
  let fixture: ComponentFixture<Cc11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cc11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cc11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
