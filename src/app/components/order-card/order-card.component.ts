import {
  indirimAdi,
  siparisDurum,
  tipAdlari,
} from './../../services/order.service';
import { MusteriSiparis } from './../../models/MusteriSiparis';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  details = false;
  indirimAdlari = indirimAdi;
  tipAdi = tipAdlari;
  durumAdlari = siparisDurum;
  @Input() public orderDone;
  @Input() public currentOrderDate;
  @Input() public currentOrderAddress;
  @Input() public order: MusteriSiparis;
  orderStatus;

  constructor() {}

  showDetails() {
    this.details = !this.details;
  }

  ngOnInit() {
    if (!this.orderDone) {
      console.log(this.order);
      this.orderStatus = this.durumAdlari.get(this.order.status);
    }
  }
}
