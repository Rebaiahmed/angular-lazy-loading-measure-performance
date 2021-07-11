import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cb1Component } from './cb1.component';

describe('Cb1Component', () => {
  let component: Cb1Component;
  let fixture: ComponentFixture<Cb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cb1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
