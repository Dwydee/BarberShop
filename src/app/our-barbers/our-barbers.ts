import { Component, HostListener } from '@angular/core';
import { OurBarbersComponent } from "../repeatable_components/our-barbers/our-barbers.component";
import { CommonModule } from '@angular/common';
import { ThePremiumServices } from "../repeatable_components/the-premium-services/the-premium-services";

@Component({
  selector: 'app-our-barbers',
  imports: [OurBarbersComponent, CommonModule, ThePremiumServices],
  templateUrl: './our-barbers.html',
  styleUrl: './our-barbers.scss'
})
export class OurBarbers {
  backgroundY = 0;

  @HostListener('window:scroll', [])
  onwindowScroll() {
    const scrollPosition = window.scrollY;
    this.backgroundY = scrollPosition * 0.5;
  }
}
