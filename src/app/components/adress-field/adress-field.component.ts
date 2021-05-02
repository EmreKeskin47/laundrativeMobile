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

  constructor(private addressService: AddressService) {}

  addressChange(event: any) {
    this.selectedAddress = event.detail.value;
    this.address.emit(this.selectedAddress);
  }

  ngOnInit() {
    this.addressService.getAddressOfCustomer().subscribe((address) => {
      this.addressList = address;
    });
  }
}
