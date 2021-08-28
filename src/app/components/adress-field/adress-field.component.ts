import { Router } from '@angular/router';
import { AddressService } from './../../services/address.service';
import { MusteriAdres } from './../../models/MusteriAdres';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-adress-field',
  templateUrl: './adress-field.component.html',
  styleUrls: ['./adress-field.component.scss'],
})
export class AdressFieldComponent implements OnInit {
  selectedAddress: MusteriAdres;
  addressList: MusteriAdres[] = [];
  @Output() address = new EventEmitter<MusteriAdres>();

  constructor(private addressService: AddressService, private router: Router) {}

  addressChange(event: any) {
    this.selectedAddress = event.detail.value;
    this.address.emit(this.selectedAddress);
  }

  ngOnInit() {
    this.fetchAddressList();
  }

  ionViewDidEnter() {
    this.fetchAddressList();
  }

  navigateToAddressCreate() {
    this.router.navigate(['/create-address']);
  }

  fetchAddressList() {
    this.addressService.getAddressOfCustomer().subscribe((address) => {
      this.addressList = address;
    });
  }

  chooseDefaultAddress() {
    if (
      this.addressList !== [] &&
      this.addressList[0] &&
      this.addressList[0].mahalleId
    ) {
      this.selectedAddress = this.addressList[0];
      this.address.emit(this.selectedAddress);
    }
  }
}
