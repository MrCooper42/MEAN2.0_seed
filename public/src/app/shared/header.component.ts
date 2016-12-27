import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) { }

  isIn = false; // store state
  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
  belongsToUser() {
    // just getting userId
    return localStorage.getItem('userId');
  }
  isNavbarCollapsed = false;

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth', 'signin'])
  }
}
