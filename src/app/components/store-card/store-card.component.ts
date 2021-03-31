import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss'],
})
export class StoreCardComponent implements OnInit {
  @Input() public storeName;
  @Input() public location;
  @Input() public timeInterval;
  @Input() public minFee;
  now: boolean;
  day: string;

  constructor() {}

  ngOnInit() {
    let date = new Date();
    let availableHour = this.timeInterval.startingTime.slice(0, 2);
    if (date.getHours() > availableHour) {
      this.now = false;
    } else {
      this.now = true;
    }
    this.day = this.now ? 'hemen teslim alabilir' : 'yarın teslim alabilir';
  }
}
