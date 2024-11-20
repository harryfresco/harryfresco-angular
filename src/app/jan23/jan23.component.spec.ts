import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jan23Component } from './jan23.component';

describe('Jan23Component', () => {
  let component: Jan23Component;
  let fixture: ComponentFixture<Jan23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jan23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jan23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
