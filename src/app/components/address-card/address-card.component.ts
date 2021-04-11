import { MusteriAdres } from './../../models/MusteriAdres';
import { Address } from '../../models/ui/Address';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent implements OnInit {
  @Input() public address: Address;
  @Input() public addres: MusteriAdres;

  constructor() {}

  ngOnInit() {
    console.log(this.addres);
  }
  editClicked() {
    console.log('edit');
  }

  deleteClicked() {
    console.log('delete');
  }
}
