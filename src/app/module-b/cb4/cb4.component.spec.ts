import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cb4Component } from './cb4.component';

describe('Cb4Component', () => {
  let component: Cb4Component;
  let fixture: ComponentFixture<Cb4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cb4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cb4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
