import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  imports: [RouterModule, NgIf, NgFor, NgClass, NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  __URL: string = ""
  pageData: any = {};
  allInFormat: any={};
  allInFormatDigital: any={};
  all;
  constructor(private dataService: DataService,
 public router: Router) {

    // console.log(router.url); // This will print the current url
    this.__URL = this.router.url;

  }
  ngOnInit(): void {


        this.dataService.getAll().subscribe((data) => {
          this.all=data
          //console.log(this.all)
        });



  }
}


