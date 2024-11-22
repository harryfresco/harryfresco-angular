import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-gallery',
  imports: [ RouterModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  __URL:string = ""
  constructor(public router: Router) {
   
  // console.log(router.url); // This will print the current url
   this.__URL = this.router.url;
  }
}
