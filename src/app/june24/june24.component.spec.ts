import { ComponentFixture, TestBed } from '@angular/core/testing';

import { June24Component } from './june24.component';

describe('June24Component', () => {
  let component: June24Component;
  let fixture: ComponentFixture<June24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [June24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(June24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
