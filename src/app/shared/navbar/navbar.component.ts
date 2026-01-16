import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mobileOpen = false;
  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }
   closeMobile() {
    this.mobileOpen = false;
  }
}
