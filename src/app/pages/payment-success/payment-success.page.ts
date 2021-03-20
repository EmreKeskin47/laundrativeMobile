import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.page.html',
  styleUrls: ['./payment-success.page.scss'],
})
export class PaymentSuccessPage implements OnInit {
  pageTitle = 'onay';
  constructor(private router: Router) {}

  ngOnInit() {}

  backToCard() {
    this.router.navigate(['/create-order']);
  }
}
