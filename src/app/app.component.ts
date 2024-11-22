import { Component } from '@angular/core';
import { NgFor, NgIf, AsyncPipe, Location} from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet, RouterModule, NavigationEnd } from '@angular/router';
import { provideRouter, Route, RouterLink } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { NavbarDigitalComponent } from "./navbar-digital/navbar-digital.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from "./header/header.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavbarComponent, FooterComponent, CommonModule,  NavbarDigitalComponent, NgIf, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harryfresco-angular';

  private routeSubscription: Subscription = new Subscription(); // To hold the subscription
  __URL: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    // Subscribe to route changes
    this.routeSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd)) // Listen for NavigationEnd events
      .subscribe((event: NavigationEnd) => {
        // Get the current URL when navigation ends
        this.__URL = event.urlAfterRedirects;
        

        // Access route parameters if needed
        this.activatedRoute.params.subscribe(params => {
      
        });
      });
  }

  ngOnDestroy() {
    // Unsubscribe from the subscription to prevent memory leaks
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

/*   __URL:string = ""

  constructor(private location: Location) {}

  ngOnInit(){
    console.log(this.location.path());
    this.__URL = this.location.path(); */
  }

