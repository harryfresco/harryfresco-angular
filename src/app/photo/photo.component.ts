import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../data.service';
import { NgFor, NgIf,NgClass, NgOptimizedImage} from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, Observable, Subscription } from 'rxjs';
import { LoadingService } from '../loading.service';
import * as $ from "jquery";
@Component({
  selector: 'app-photo',
  imports: [ NgIf, NgFor, NgClass, NgOptimizedImage],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent implements OnInit {
  pageData: any = {};
  private routeSubscription: Subscription = new Subscription(); // To hold the subscription
  __URL: string = '';
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,private router: Router,private loadingService: LoadingService
  ) {    // console.log(router.url); // This will print the current url
    this.__URL = this.router.url;}

  ngOnInit(): void {
    //console.log("hi")    
     // Turn on the loading spinner
     this.loadingService.loadingOn();
    // Subscribe to route changes




          //const slug = params.get('route');
          if (this.__URL) {
            //console.log(this.__URL)
            // Fetch data based on the 'route' from the JSON file
            this.dataService.getData(this.__URL).subscribe((data) => {  
                      // Turn off the loading spinner
                      this.pageData = data;
        this.loadingService.loadingOff();
 //console.log(data)
       
             
            });
          }
    
   
  }
}
