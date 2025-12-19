import { Component } from '@angular/core';
import { WorkingHours } from "../repeatable_components/working-hours/working-hours";
import { ContactusSlider } from '../repeatable_components/contactus-slider/contactus-slider';
import { OurBarbersComponent } from "../repeatable_components/our-barbers/our-barbers.component";
import { ThePremiumServices } from '../repeatable_components/the-premium-services/the-premium-services';
import { OurPricing } from '../repeatable_components/our-pricing/our-pricing';
import { FirstSale } from '../repeatable_components/first-sale/first-sale';


@Component({
  selector: 'app-landing-page',
  imports: [WorkingHours, ContactusSlider, OurBarbersComponent, ThePremiumServices, OurPricing, FirstSale],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {

}
