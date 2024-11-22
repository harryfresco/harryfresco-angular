import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  __URL:string = ""
  constructor(public router: Router) {
   
   //console.log(router.url); // This will print the current url
   this.__URL = this.router.url;
  }
}
