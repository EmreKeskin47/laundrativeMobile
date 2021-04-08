import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.page.html',
  styleUrls: ['./account-info.page.scss'],
})
export class AccountInfoPage implements OnInit {
  pageTitle = 'hesap bilgileri';

  name = 'Revşan Deniz Yıldırım Çobanoğlu';
  email = 'revsandenizyildirimcobanoglu@gmail.com';
  password = '*******';
  phone = '(00 90) 535 867 18 97';
  disableEdit = true;
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToDeleteAccount() {
    this.router.navigate(['/profile/delete-account']);
  }
  editClicked() {
    this.disableEdit = !this.disableEdit;
  }

  saveClicked() {
    console.log('save');
  }
}
