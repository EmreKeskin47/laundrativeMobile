import { MusteriSiparis } from './../../models/MusteriSiparis';
import { OrderService } from './../../services/order.service';
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
  orderList: MusteriSiparis[] = [];
  liveOrders: MusteriSiparis[] = [];

  constructor(private router: Router, private orderService: OrderService) {}

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

  ngOnInit() {
    this.orderService.getOrderList().subscribe((order) => {
      this.orderList = order;
      for (let i = 0; i < this.orderList.length; i++) {
        if (
          this.orderList[i].status == 'YENI_KAYIT_FROM_IOS' ||
          'YENI_KAYIT_FROM_ANDROID ' ||
          'YENI_KAYIT_FROM_WEB'
        ) {
          this.liveOrders.push(this.orderList[i]);
        }
      }
    });
  }
}
