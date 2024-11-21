import { ComponentFixture, TestBed } from '@angular/core/testing';

import { June24dComponent } from './june24d.component';

describe('June24dComponent', () => {
  let component: June24dComponent;
  let fixture: ComponentFixture<June24dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [June24dComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(June24dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
