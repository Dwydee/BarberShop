import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { OurBarbersComponent } from './repeatable_components/our-barbers/our-barbers.component';


register();

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
