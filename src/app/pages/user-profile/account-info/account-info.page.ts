import { FeedbackAlertService } from './../../../services/feedback-alert.service';
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

  name = '';
  email = '';
  password = '*******';
  phone = '';
  disableEdit = true;
  constructor(
    private router: Router,
    private authService: AuthService,
    private alertSrv: FeedbackAlertService
  ) {}

  ngOnInit() {
    this.authService.getUserInfo().subscribe((user) => {
      console.log(user, 'get user info');
      this.name = user.adi;
      this.email = user.email;
      this.phone = user.telefon;
    });
  }

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

  phoneChange(event: any) {
    this.phone = event.detail.value;
  }

  saveClicked() {
    let user = new Musteri(this.name, this.phone, this.email, this.password);
    this.authService.updateUserInfo(user).subscribe((res) => {
      console.log(res, 'update user res');
      if (res.result == 'ok') {
        this.disableEdit = true;
        this.alertSrv.successAlert('Kullanıcı başarıyla güncellendi!');
      } else {
        this.alertSrv.errorAlert('Kullanıcı güncelleme hatası');
      }
    });
  }

  navigateToAccount() {
    this.router.navigate(['/profile']);
  }
}
