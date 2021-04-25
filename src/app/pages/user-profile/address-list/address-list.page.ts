import { AuthService } from './../../../services/auth.service';
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

  constructor(
    private router: Router,
    private addressService: AddressService,
    private authService: AuthService
  ) {}

  navigateToCreateAddress() {
    this.router.navigate(['profile/create-address']);
  }

  ngOnInit() {
    let user = this.authService.getCredentials();
    this.addressService
      .getAddressOfCustomer(user.token)
      .subscribe((address) => {
        this.adresList = address;
      });
  }
}
