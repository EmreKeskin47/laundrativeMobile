import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() public itemCost;
  @Input() public deliveryDate;
  @Input() public itemName;

  constructor() {}

  ngOnInit() {}
}
