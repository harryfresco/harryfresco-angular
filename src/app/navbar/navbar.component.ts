import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { DataService } from '../data.service';
declare function myFunction(): void;
import { NgFor,  NgIf,NgClass} from '@angular/common'; 

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
           console.log(this.__URL)
          });


        }

   
  }




}

