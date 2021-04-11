import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss'],
})
export class StoreCardComponent implements OnInit {
  @Input() public storeName;
  @Input() public location;
  @Input() public start;
  @Input() public end;
  @Input() public minFee;
  now: boolean;
  day: string;

  constructor() {}

  ngOnInit() {
    let date = new Date();

    if (this.end > date.getHours() && date.getHours() > this.start) {
      this.now = true;
    } else {
      this.now = false;
    }
    this.day = this.now ? 'hemen teslim alabilir' : 'yarın teslim alabilir';
  }
}
