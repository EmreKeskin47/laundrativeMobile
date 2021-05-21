import { MusteriAdres } from './../../../models/MusteriAdres';
import { AddressService } from './../../../services/address.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.page.html',
  styleUrls: ['./address-list.page.scss'],
})
export class AddressListPage implements OnInit {
  pageTitle = 'adreslerim';
  adresList: MusteriAdres[] = [];

  constructor(private router: Router, private addressService: AddressService) {}

  navigateToCreateAddress() {
    this.router.navigate(['profile/create-address']);
  }

  ngOnInit() {
    this.addressService.getAddressOfCustomer().subscribe((address) => {
      this.adresList = address;
    });
  }

  updateList() {
    this.addressService.getAddressOfCustomer().subscribe((address) => {
      this.adresList = address;
    });
  }
}
