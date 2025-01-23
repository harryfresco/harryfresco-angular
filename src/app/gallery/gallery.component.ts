import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-gallery',
  imports: [RouterModule, NgIf, NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  __URL: string = ""
  all;
  constructor(private dataService: DataService,
 public router: Router,private loadingService: LoadingService) {

    // console.log(router.url); // This will print the current url
    this.__URL = this.router.url;

  }
  ngOnInit(): void {

     // Turn on the loading spinner
     this.loadingService.loadingOn();
        this.dataService.getAll().subscribe((data) => {
          this.all=data
          //console.log(this.all)
          this.loadingService.loadingOff();
        } );



  }
}


