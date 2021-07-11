import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cb5Component } from './cb5.component';

describe('Cb5Component', () => {
  let component: Cb5Component;
  let fixture: ComponentFixture<Cb5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cb5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cb5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
