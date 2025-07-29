import { Component } from '@angular/core';
import { WorkingHours } from '../repeatable_components/working-hours/working-hours';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  imports: [WorkingHours]
})
export class AboutUsComponent {
  
}
