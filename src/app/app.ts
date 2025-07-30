import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./nav-bar/nav-bar";
import { HomePage } from "./home-page/home-page";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [ NavBar, HomePage, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'BarberShop';
}
