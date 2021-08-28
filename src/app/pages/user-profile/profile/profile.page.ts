import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isLogged = this.authService.getCredentials().token;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToAccountInfo() {
    this.router.navigate(['profile/account-info']);
  }

  navigateToAddressList() {
    this.router.navigate(['profile/address-list']);
  }
  navigateToContact() {
    this.router.navigate(['/profile/contact']);
  }

  navigateToOrders() {
    this.router.navigate(['/profile/siparislerim']);
  }

  navigateToNotifications() {
    this.router.navigate(['/profile/notification-settings']);
  }
}
