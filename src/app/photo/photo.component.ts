import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../data.service';
import { NgFor, NgIf,NgClass} from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-photo',
  imports: [ NgIf, NgFor, NgClass],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent implements OnInit {
  pageData: any = {};
  private routeSubscription: Subscription = new Subscription(); // To hold the subscription
  __URL: string = '';
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,private router: Router
  ) {}

  ngOnInit(): void {
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
          }
    
      });
  }
}
