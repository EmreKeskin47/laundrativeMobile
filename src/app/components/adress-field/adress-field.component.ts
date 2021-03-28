import { Component, Input, OnInit } from '@angular/core';

interface Address {
  id: number;
  first: string;
  neighborhoodId: number;
}
@Component({
  selector: 'app-adress-field',
  templateUrl: './adress-field.component.html',
  styleUrls: ['./adress-field.component.scss'],
})
export class AdressFieldComponent implements OnInit {
  selectedAddress: Address;

  addressList: Address[] = [
    {
      id: 1,
      first: 'Address1',
      neighborhoodId: 5432,
    },
    {
      id: 2,
      first: 'Address2',
      neighborhoodId: 5432,
    },
    {
      id: 3,
      first: 'Address3',
      neighborhoodId: 5432,
    },
  ];

  constructor() {}

  addressChange(event: any) {
    this.selectedAddress = event.detail.value;
  }

  ngOnInit() {}
}
