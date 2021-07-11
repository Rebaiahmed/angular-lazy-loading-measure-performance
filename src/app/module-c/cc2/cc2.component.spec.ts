import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cc2Component } from './cc2.component';

describe('Cc2Component', () => {
  let component: Cc2Component;
  let fixture: ComponentFixture<Cc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cc2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
