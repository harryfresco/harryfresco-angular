import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aug23Component } from './aug23.component';

describe('Aug23Component', () => {
  let component: Aug23Component;
  let fixture: ComponentFixture<Aug23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aug23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aug23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
