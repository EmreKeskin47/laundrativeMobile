import { Address } from '../../models/ui/Address';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent implements OnInit {
  @Input() public address: Address;

  constructor() {}

  ngOnInit() {}
  editClicked() {
    console.log('edit');
  }

  deleteClicked() {
    console.log('delete');
  }
}
