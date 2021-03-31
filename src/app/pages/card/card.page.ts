import { KindPriceItem } from './../../models/KindPriceItem';
import { OrderService } from './../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  cardItems: KindPriceItem[];

  isLogged = this.route.snapshot.paramMap.get('isLogged') || false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.cardItems = this.orderService.currentCardContent;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.router.navigate(['/signin']);
  }

  navigateToPayment() {
    this.router.navigate(['card/payment']);
  }
}
