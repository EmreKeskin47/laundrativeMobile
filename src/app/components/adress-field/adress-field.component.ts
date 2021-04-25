import { AuthService } from './../../services/auth.service';
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

  constructor(
    private addressService: AddressService,
    private authService: AuthService
  ) {}

  addressChange(event: any) {
    console.log(event, 'address seçimi event');
    this.selectedAddress = event.detail.value;
  }

  ngOnInit() {
    let user = this.authService.getCredentials();
    this.addressService
      .getAddressOfCustomer(user.token)
      .subscribe((address) => {
        this.addressList = address;
        console.log(this.addressList, 'get customer address in address field');
        console.log(user.token, 'token');
      });
  }
}
