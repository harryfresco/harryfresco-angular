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
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PhotoComponent } from "./photo/photo.component";
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NavbarComponent, FooterComponent, CommonModule, NavbarDigitalComponent, NgIf, HeaderComponent, PhotoComponent],
  templateUrl: './app.component.html',
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harryfresco-angular';

  private routeSubscription: Subscription = new Subscription(); // To hold the subscription
  __URL: string = '';
  pageData: any = {};
  nav: string ='';
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private location: Location, private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to route changes
    this.routeSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd)) // Listen for NavigationEnd events
      .subscribe((event: NavigationEnd) => {
        // Get the current URL when navigation ends
        this.__URL = event.urlAfterRedirects;
        


          //const slug = params.get('route');
          if (this.__URL) {
            // Fetch data based on the 'route' from the JSON file
            this.dataService.getData(this.__URL).subscribe((data) => {
              this.pageData = data;
             // console.log(this.pageData)
            });
                        // Fetch data based on the 'route' from the JSON file
                        this.dataService.getNav().subscribe((data) => {
                          this.nav = data;
                         console.log(this.nav)
                        });
          }
    
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

