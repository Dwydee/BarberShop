import { Component } from '@angular/core';
import { WorkingHours } from "../repeatable_components/working-hours/working-hours";
import { OurPricing } from "../repeatable_components/our-pricing/our-pricing";

@Component({
  selector: 'app-home-page',
  imports: [WorkingHours, OurPricing],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
