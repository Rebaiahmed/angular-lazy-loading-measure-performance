import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cb3Component } from './cb3.component';

describe('Cb3Component', () => {
  let component: Cb3Component;
  let fixture: ComponentFixture<Cb3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cb3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
