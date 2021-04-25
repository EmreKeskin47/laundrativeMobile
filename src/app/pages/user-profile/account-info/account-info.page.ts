import { Musteri } from './../../../models/Musteri';
import { AuthService } from './../../../services/auth.service';
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
  constructor(private router: Router, private authService: AuthService) {}

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

  nameChange(event: any) {
    this.name = event.detail.value;
  }

  emailChange(event: any) {
    this.email = event.detail.value;
  }

  passwordChange(event: any) {
    this.password = event.detail.value;
  }

  phoneChange(event: any) {
    this.phone = event.detail.value;
  }

  saveClicked() {
    let user = new Musteri(this.name, this.phone, this.email, this.password);
    this.authService.updateUserInfo(user);
  }
}
