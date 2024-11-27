import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  imports: [RouterModule, NgIf, NgFor, NgClass],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  __URL: string = ""
  pageData: any = {};
  allInFormat: any={};
  allInFormatDigital: any={};
  constructor(private dataService: DataService,
 public router: Router) {

    // console.log(router.url); // This will print the current url
    this.__URL = this.router.url;

  }
  ngOnInit(): void {


        this.dataService.getSeperatedFormatData().subscribe((data) => {
          this.allInFormat = data[0];
          this.allInFormatDigital = data[1]
          //console.log(this.pageData)
        });



  }
}


