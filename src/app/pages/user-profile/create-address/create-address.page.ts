import { SemtListe } from './../../../models/ui/SemtListe';
import { AddressService } from './../../../services/address.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.page.html',
  styleUrls: ['./create-address.page.scss'],
})
export class CreateAddressPage implements OnInit {
  selectedDistrict: SemtListe = null;

  anotherUser = false;
  addressName: string = '';
  addressDesc: string = '';
  location: string = '';
  anotherUserName: string = '';
  anotherUserPhone: string = '';

  constructor(private router: Router, private addressService: AddressService) {}

  adjustSelectedDistrict(event: SemtListe) {
    this.selectedDistrict = event;
    console.log(event);
  }

  onChange() {
    this.anotherUser = !this.anotherUser;
  }

  addressNameChange(event: any) {
    this.addressName = event.detail.value;
  }

  addressDescChange(event: any) {
    this.addressDesc = event.detail.value;
  }

  anotherUserNameChange(event: any) {
    this.anotherUserName = event.detail.value;
  }

  anotherUserPhoneChange(event: any) {
    this.anotherUserPhone = event.detail.value;
  }

  navigateToAddressList() {
    this.addressService
      .createAddress(
        this.selectedDistrict.mahalleId,
        this.addressName,
        this.addressDesc,
        this.anotherUserName,
        this.anotherUserPhone
      )
      .subscribe((item) =>
        this.router.navigate(['/profile/add-address-result'])
      );
  }

  ngOnInit() {}
}
