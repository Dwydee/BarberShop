import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mini-the-premium-services',
  imports: [CommonModule],
  templateUrl: './the-premium-services.html',
  styleUrl: './the-premium-services.scss'
})
export class ThePremiumServices {
  context: number = 1;

  setContext(context: number) {
    this.context = context;
  }
}
