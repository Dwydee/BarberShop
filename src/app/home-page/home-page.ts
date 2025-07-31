import { WorkingHours } from './../repeatable_components/working-hours/working-hours';
import { Component } from '@angular/core';
import { OurPricing } from "../repeatable_components/our-pricing/our-pricing";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { OurBarbershopStories } from './our-barbershop-stories/our-barbershop-stories';



register();

@Component({
  selector: 'app-home-page',
  imports: [
    WorkingHours,
    OurPricing,
    OurBarbershopStories
],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {

}
