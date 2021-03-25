import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  pageTitle = 'siparişleriniz';
  onlyDone = false;

  constructor() {}

  currentOrders() {
    this.onlyDone = true;
  }

  allOrders() {
    this.onlyDone = false;
  }

  ngOnInit() {}
}
