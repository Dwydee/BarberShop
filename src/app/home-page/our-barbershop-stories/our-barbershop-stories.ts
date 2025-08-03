import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


register();

@Component({
  selector: 'app-our-barbershop-stories',
  imports: [],
  templateUrl: './our-barbershop-stories.html',
  styleUrl: './our-barbershop-stories.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OurBarbershopStories {

}
