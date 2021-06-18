import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(private router: Router) {}

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

  navigateToDiscountList() {
    this.router.navigate(['/profile/discount-list']);
  }

  navigateToNotifications() {
    this.router.navigate(['/profile/notification-settings']);
  }
}
