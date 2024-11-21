import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDigitalComponent } from './navbar-digital.component';

describe('NavbarDigitalComponent', () => {
  let component: NavbarDigitalComponent;
  let fixture: ComponentFixture<NavbarDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
