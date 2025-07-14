import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

import { AsideNavbarComponent } from '../aside-navbar/aside-navbar.component';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AsideNavbarComponent, RouterOutlet, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  navbarLateralVisible = false;

  toggleSidebar() {
    this.navbarLateralVisible = !this.navbarLateralVisible;
  }
}
