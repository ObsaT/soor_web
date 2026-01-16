import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  mobileOpen = false;
  isAuthenticated$!: any;

  constructor(private auth: AuthService, private router: Router) {
    this.isAuthenticated$ = this.auth.isAuthenticated$;
  }

  toggleMobile() { this.mobileOpen = !this.mobileOpen; }
  closeMobile() { this.mobileOpen = false; }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
