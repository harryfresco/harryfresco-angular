import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { DataService } from '../data.service';
declare function setNavLink(): void;
import { NgFor, NgIf, NgClass } from '@angular/common';
import { LoadingService } from '../loading.service';

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
  digital;
  analogue;
  routeOut: string = '';
  constructor(private router: Router, public dataService: DataService, private route: ActivatedRoute,private loadingService: LoadingService) {
    //console.log(router.url); // This will print the current url
    this.__URL = this.router.url;

  }

  ngOnInit(): void {    

     // Turn on the loading spinner
     this.loadingService.loadingOn();
           //get all pages based on url "/digital/**"
           this.dataService.getAllFromFormat("/digital").subscribe((data) => {
            this.digital = data; 
           // console.log(data)
          });
          //get all pages based on url "/analogue/**"
          this.dataService.getAllFromFormat("/analogue").subscribe((data) => {
          this.analogue = data; 
          // console.log(data)
        });
    if (this.__URL) {
      
      //get all pages based on url "/digital/**"
      this.dataService.getNavFromFormat(this.__URL).subscribe((data) => {

        this.nav = data;
        this.loadingService.loadingOff();
       // console.log(data)
      });


    }


  }
  ngAfterViewInit() {

   // setNavLink(); // Call the JavaScript function
  }



}

