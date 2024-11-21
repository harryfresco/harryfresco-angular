import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { NavbarDigitalComponent } from "./navbar-digital/navbar-digital.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { LandingComponent } from "./landing/landing.component";  


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavbarComponent, FooterComponent, CommonModule, LandingComponent, NavbarDigitalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harryfresco-angular';
  router: string;

  constructor(public _router: Router){

          this.router = _router.url; 
    }
}
