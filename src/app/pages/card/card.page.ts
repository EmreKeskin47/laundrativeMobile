import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  title = 'sepet';
  storeName = 'Bil wash laundry ';
  location = 'ümitköy mah. çankaya';
  timeInterval = '09:30-17:00';
  day = 'Hemen teslim alabilir';
  minFee = '40,00tl';

  discountFee = '50,00tl ';
  discountText = 'üzeri siparişlerde ücretsiz servis';

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.router.navigate(['/signin']);
  }
}
