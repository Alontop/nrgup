import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

import { AsideNavbarComponent } from '../aside-navbar/aside-navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, AsideNavbarComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
