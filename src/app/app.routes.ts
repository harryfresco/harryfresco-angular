import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { June22Component } from './june22/june22.component';
import { Jan23Component } from './jan23/jan23.component';
import { May23Component } from './may23/may23.component';
import { Aug23Component } from './aug23/aug23.component';
import { June24Component } from './june24/june24.component';
import { LandingComponent } from './landing/landing.component';
import { ChooseComponent } from './choose/choose.component';
import { WizardComponent } from './wizard/wizard.component';
import { June24dComponent } from './june24d/june24d.component';
import { JapanComponent } from './japan/japan.component';
import { SkyComponent } from './sky/sky.component';
import { PhotoComponent } from './photo/photo.component';

export const routes: Routes = [
    { path : 'analogue/june22', component: PhotoComponent},
    { path : 'analogue/jan23', component: PhotoComponent},
    { path : 'analogue/may23', component: PhotoComponent, data: { title: 'Harry Fresco' }},
    { path : 'analogue/aug23', component: PhotoComponent},
    { path : 'analogue/june24', component: PhotoComponent},
    { path : 'landing', component: LandingComponent, data: { title: 'Harry Fresco' }},
    { path : 'choose', component: ChooseComponent, data: { title: 'Harry Fresco' }},
    { path : 'digital/wizard', component: PhotoComponent},
    { path : 'digital/june24d', component: PhotoComponent},
    { path : 'digital/japan', component: PhotoComponent},
    { path : 'digital/sky', component: PhotoComponent},
    { path : 'gallery', loadComponent:() => import('./gallery/gallery.component').then(m=>m.GalleryComponent)},
    { path: '', redirectTo: '/landing', pathMatch: 'full'},
    { path: '*', redirectTo: '/landing', pathMatch: 'full'},
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