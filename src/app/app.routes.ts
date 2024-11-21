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

export const routes: Routes = [
    { path : 'june22', component: June22Component},
    { path : 'jan23', component: Jan23Component},
    { path : 'may23', component: May23Component},
    { path : 'aug23', component: Aug23Component},
    { path : 'june24', component: June24Component},
    { path : 'landing', component: LandingComponent},
    { path : 'choose', component: ChooseComponent},
    { path : 'wizard', component: WizardComponent},
    { path: '', redirectTo: '/landing', pathMatch: 'full'}
   /* { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent } */
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }