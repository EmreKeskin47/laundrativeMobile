import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  pageTitle = 'siparişleriniz';
  onlyDone = false;

  constructor(private router: Router) {}

  currentOrders() {
    this.onlyDone = true;
  }

  allOrders() {
    this.onlyDone = false;
  }

  navigateToCreateOrder() {
    this.router.navigate(['/create-order']);
  }

  editClicked() {
    console.log('edit');
  }

  deleteClicked() {
    console.log('delete');
  }

  ngOnInit() {}
}
