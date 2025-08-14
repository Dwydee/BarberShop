import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WorkingHours } from "../repeatable_components/working-hours/working-hours";
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  imports: [WorkingHours],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactusComponent {
spaceBetween = 3;

   onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    console.log(progress);
   }

    onSlideChange() {
    console.log('slide changed');
  }
}
