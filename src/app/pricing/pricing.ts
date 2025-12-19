import { Component } from '@angular/core';
import { OurPricing } from '../repeatable_components/our-pricing/our-pricing';
import { ThePremiumServices } from '../repeatable_components/the-premium-services/the-premium-services';

@Component({
  selector: 'app-pricing',
  imports: [OurPricing, ThePremiumServices],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss'
})
export class Pricing {

}
