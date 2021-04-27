import { AddressService } from './../../services/address.service';
import { MusteriAdres } from './../../models/MusteriAdres';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-adress-field',
  templateUrl: './adress-field.component.html',
  styleUrls: ['./adress-field.component.scss'],
})
export class AdressFieldComponent implements OnInit {
  selectedAddress: MusteriAdres;
  addressList: MusteriAdres[] = [];

  constructor(private addressService: AddressService) {}

  addressChange(event: any) {
    console.log(event, 'address seçimi event');
    this.selectedAddress = event.detail.value;
  }

  ngOnInit() {
    this.addressService.getAddressOfCustomer().subscribe((address) => {
      this.addressList = address;
    });
  }
}
