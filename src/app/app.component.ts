import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { PhotosComponent } from "./photos/photos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, PhotosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'harryfresco-angular';
}
