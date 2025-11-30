import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WorkingHours } from '../repeatable_components/working-hours/working-hours';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';
import { OurBarbersComponent } from '../repeatable_components/our-barbers/our-barbers.component';
import { ThePremiumServices } from '../repeatable_components/the-premium-services/the-premium-services';

register();

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  imports: [WorkingHours, OurBarbersComponent, ThePremiumServices],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutUsComponent {
   spaceBetween = 1;

   onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    console.log(progress);
   }

    onSlideChange() {
    console.log('slide changed');
  }
}
