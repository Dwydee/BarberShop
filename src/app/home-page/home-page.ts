import { WorkingHours } from './../repeatable_components/working-hours/working-hours';
import { Component } from '@angular/core';
import { OurPricing } from "../repeatable_components/our-pricing/our-pricing";

@Component({
  selector: 'app-home-page',
  imports: [
    WorkingHours,
    OurPricing
],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss']
})
export class HomePage {

}
