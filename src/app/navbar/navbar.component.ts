import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
declare function myFunction(): void;
@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  ngOnInit(): void {
    let node = document.createElement('script');
    node.src = "../assets/js/scripts.js";//Change to your js file
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
 }

}
