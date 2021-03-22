import { Component, OnInit } from '@angular/core';

interface Address {
  id: number;
  first: string;
}
@Component({
  selector: 'app-adress-field',
  templateUrl: './adress-field.component.html',
  styleUrls: ['./adress-field.component.scss'],
})
export class AdressFieldComponent implements OnInit {
  addressList: Address[] = [
    {
      id: 1,
      first: 'Address1',
    },
    {
      id: 2,
      first: 'Address2',
    },
    {
      id: 3,
      first: 'Address3',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
