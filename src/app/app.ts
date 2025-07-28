import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./nav-bar/nav-bar";
import { HomePage } from "./home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'BarberShop';
}
