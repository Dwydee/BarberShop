import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePage } from './home-page/home-page';
import { OurBarbersComponent } from './repeatable_components/our-barbers/our-barbers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurBarbers } from './our-barbers/our-barbers';
import { LandingPage } from './landing-page/landing-page';
import { Pricing } from './pricing/pricing';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'our-barbers', component: OurBarbersComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'barbers', component: OurBarbers },
  { path: 'landing', component: LandingPage },
  { path: 'pricing', component: Pricing }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
