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
  breakpointsConfig = {
  320: {
    loop: true,
    autoplay: true,
    speed: 800,
    a11y: true,
    allowTouchMove: true,
    slidesPerView: 1,
    slidesPerGroup: 1
  },
  768: {
    loop: true,
    autoplay: true,
    speed: 1000,
    a11y: true,
    allowTouchMove: true,
    slidesPerView: 2,
    slidesPerGroup: 2
  },
  1400: {
    loop: true,
    autoplay: true,
    speed: 1200,
    a11y: true,
    allowTouchMove: true,
    slidesPerView: 3,
    slidesPerGroup: 3
  },
  1920: {
    loop: true,
    autoplay: true,
    speed: 1400,
    a11y: true,
    allowTouchMove: true,
    slidesPerView: 3,
    slidesPerGroup: 3
  }

};

}
