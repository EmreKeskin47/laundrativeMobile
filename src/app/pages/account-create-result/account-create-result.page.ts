import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-create-result',
  templateUrl: './account-create-result.page.html',
  styleUrls: ['./account-create-result.page.scss'],
})
export class AccountCreateResultPage implements OnInit {
  pageTitle = 'adres ve kredi kartı bilgisi';

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToCard() {
    this.router.navigate(['/card']);
  }

  navigateToAddAddress() {
    this.router.navigate(['/add-address']);
  }
}
