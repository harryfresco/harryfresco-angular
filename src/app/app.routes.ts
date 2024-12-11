import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ChooseComponent } from './choose/choose.component';
import { PhotoComponent } from './photo/photo.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path : 'analogue/june22', component: PhotoComponent, title: 'Harry Fresco | June 22' },
    { path : 'analogue/jan23', component: PhotoComponent, title: 'Harry Fresco | Jan 23' },
    { path : 'analogue/may23', component: PhotoComponent, title: 'Harry Fresco | May 23' },
    { path : 'analogue/aug23', component: PhotoComponent, title: 'Harry Fresco | Aug 23' },
    { path : 'analogue/june24', component: PhotoComponent, title: 'Harry Fresco | June 23' },
    { path : '', component: LandingComponent, title: 'Harry Fresco' },
    { path : 'landing', component: LandingComponent, title: 'Harry Fresco' },
    { path : 'choose', component: ChooseComponent,  title: 'Harry Fresco | Choose' },
    { path : 'digital/wizard', component: PhotoComponent, title: 'Harry Fresco | Wizard'},
    { path : 'digital/june24d', component: PhotoComponent, title: 'Harry Fresco | June 24'},
    { path : 'digital/japan', component: PhotoComponent, title: 'Harry Fresco | Japan'},
    { path : 'digital/sky', component: PhotoComponent, title: 'Harry Fresco | Sky'},
    { path : 'digital/nov24', component: PhotoComponent, title: 'Harry Fresco | Nov 24'},
    { path : 'gallery', loadComponent:() => import('./gallery/gallery.component').then(m=>m.GalleryComponent), title: 'Harry Fresco | Gallery'},
    { path : 'about', component: AboutComponent, title: 'Harry Fresco | About'},
    { path : '**', component: NotfoundComponent, title: 'Harry Fresco | 404'},
//    { path: '', redirectTo: '/', pathMatch: 'full'},
    //{ path: '**', redirectTo: '/', pathMatch: 'full'},
   /* { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent } */
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }