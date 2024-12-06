import { Component } from '@angular/core';
import { NgIf, Location} from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet, RouterModule, NavigationEnd } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from "./header/header.component";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { DataService } from './data.service';
import { LoaderComponent } from "./loader/loader.component"; 
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavbarComponent, FooterComponent, CommonModule, NgIf, HeaderComponent, LoaderComponent],
  templateUrl: './app.component.html',
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  styleUrl: './app.component.css'
})
export class AppComponent {
  


  private routeSubscription: Subscription = new Subscription(); // To hold the subscription
  __URL: string = '';
  pageData: any = {};
  nav: string ='';
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private location: Location, private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    //console.log("Hello? Anyone?!")
    // Subscribe to route changes
    this.routeSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd)) // Listen for NavigationEnd events
      .subscribe((event: NavigationEnd) => {
        // Get the current URL when navigation ends
        this.__URL = event.urlAfterRedirects;
        


    
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

