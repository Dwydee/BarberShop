import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WorkingHours } from "../repeatable_components/working-hours/working-hours";


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  imports: [WorkingHours],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ContactusComponent {
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
    allowTouchMove: false,
    slidesPerView: 4,
    slidesPerGroup: 3
  }

  };
}
