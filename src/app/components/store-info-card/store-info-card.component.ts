import { Isletme } from './../../models/İsletme';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-info-card',
  templateUrl: './store-info-card.component.html',
  styleUrls: ['./store-info-card.component.scss'],
})
export class StoreInfoCardComponent implements OnInit {
  @Input() selectedIns: Isletme;
  @Input() selectedInsLocation;

  constructor() {}

  ngOnInit() {}
}
