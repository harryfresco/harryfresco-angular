import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May23Component } from './may23.component';

describe('May23Component', () => {
  let component: May23Component;
  let fixture: ComponentFixture<May23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [May23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
