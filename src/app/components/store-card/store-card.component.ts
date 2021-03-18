import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss'],
})
export class StoreCardComponent implements OnInit {
  @Input() public storeName;
  @Input() public location;
  timeInterval = '09:30-17:00';
  day = 'Hemen teslim alabilir';
  minFee = '40tl';

  constructor() {}

  ngOnInit() {}
}
