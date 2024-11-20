import { ComponentFixture, TestBed } from '@angular/core/testing';

import { June22Component } from './june22.component';

describe('June22Component', () => {
  let component: June22Component;
  let fixture: ComponentFixture<June22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [June22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(June22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
