import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { DataService } from '../data.service';
declare function myFunction(): void;
import { NgFor,  NgIf,NgClass} from '@angular/common'; 
import * as script 
    from "../../assets/js/scripts.js" ;
declare function makeLinksActive(): void;
@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  private routeSubscription: Subscription = new Subscription(); // To hold the subscription
  __URL: string = '';
  nav;
  routeOut: string ='';
  constructor(private router: Router, public dataService: DataService, private route: ActivatedRoute) {
    //console.log(router.url); // This will print the current url
    this.__URL = this.router.url;

  }

  ngOnInit(): void {    // Subscribe to route changes

        //const slug = params.get('route');
        if (this.__URL) {
          // Fetch data based on the 'route' from the JSON file
          this.dataService.getNavFromFormat(this.__URL).subscribe((data) => {
            
            this.nav = data;
           //console.log(this.nav)
          });
    // Subscribe to route changes
    this.routeSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd)) // Listen for NavigationEnd events
      .subscribe((event: NavigationEnd) => {
        // Get the current URL when navigation ends
        this.__URL = event.urlAfterRedirects;
        script.makeLinksActive();
    
      });

        }

   
  }




}

