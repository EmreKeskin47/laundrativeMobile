import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-menu',
  templateUrl: './store-menu.page.html',
  styleUrls: ['./store-menu.page.scss'],
})
export class StoreMenuPage implements OnInit {
  pageTitle = 'mağaza detayları';

  storeName = 'Bil wash laundry ';
  location = 'ümitköy mah. çankaya';
  timeInterval = '09:30-17:00';
  day = 'Hemen teslim alabilir';
  minFee = '40,00tl';

  discountFee = '50,00tl ';
  discountText = 'üzeri siparişlerde ücretsiz servis';

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToCard() {
    this.router.navigate(['/card', { isLogged: true }]);
  }
}
