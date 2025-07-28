import { Component } from '@angular/core';
import { WorkingHours } from "../repeatable_components/working-hours/working-hours";
import { Carousel } from "../repeatable_components/carousel/carousel";

@Component({
  selector: 'app-home-page',
  imports: [WorkingHours, Carousel],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
