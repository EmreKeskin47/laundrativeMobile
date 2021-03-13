import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
})
export class DiscountComponent implements OnInit {
  image = '';
  amount = '50.000 tl üzeri her alışverişte ';
  bank = 'xbank mobil müşterilerine';
  percentage = '%5';
  constructor() {}

  ngOnInit() {}
}
