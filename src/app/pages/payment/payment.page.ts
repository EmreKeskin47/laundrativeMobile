import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  public pageTitle: 'ödeme';

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToPaymentSuccess() {
    this.router.navigate(['card/payment/payment-success']);
  }
  backToCard() {
    this.router.navigate(['/card']);
  }
}
