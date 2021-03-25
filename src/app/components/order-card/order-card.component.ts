import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  details = false;
  @Input() public orderDate;

  constructor() {}

  showDetails() {
    this.details = !this.details;
  }

  ngOnInit() {}
}
