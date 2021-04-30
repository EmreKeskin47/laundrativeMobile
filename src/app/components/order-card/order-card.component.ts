import { MusteriSiparis } from './../../models/MusteriSiparis';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  details = false;
  @Input() public orderDone;
  @Input() public currentOrderDate;
  @Input() public currentOrderAddress;
  @Input() public order: MusteriSiparis;

  constructor() {}

  showDetails() {
    this.details = !this.details;
  }

  ngOnInit() {}
}
