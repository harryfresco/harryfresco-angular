import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-digital',
  imports: [],
  templateUrl: './navbar-digital.component.html',
  styleUrl: './navbar-digital.component.css'
})
export class NavbarDigitalComponent {
  ngOnInit(): void {
    let node = document.createElement('script');
    node.src = "../assets/js/scripts.js";//Change to your js file
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
 }

}
