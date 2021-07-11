import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cb2Component } from './cb2.component';

describe('Cb2Component', () => {
  let component: Cb2Component;
  let fixture: ComponentFixture<Cb2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cb2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
