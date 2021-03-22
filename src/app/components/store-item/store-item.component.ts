import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss'],
})
export class StoreItemComponent implements OnInit {
  @Input() public itemName;
  @Input() public itemCost;
  @Input() public itemCategory;

  constructor() {}

  ngOnInit() {}
}
