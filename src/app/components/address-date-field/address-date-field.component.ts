import { Component, OnInit, Input } from '@angular/core';

interface Address {
  id: number;
  first: string;
}

@Component({
  selector: 'app-address-date-field',
  templateUrl: './address-date-field.component.html',
  styleUrls: ['./address-date-field.component.scss'],
})
export class AddressDateFieldComponent implements OnInit {
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

  @Input() public calenderTitle;

  constructor() {}

  ngOnInit() {}
}
