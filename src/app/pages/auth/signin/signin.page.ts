import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  pageTitle = 'hesap oluştur';

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToAccount() {
    this.router.navigate(['/account-create-result']);
  }
}
