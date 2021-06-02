import { AuthService } from './../../../services/auth.service';
import { SemtListe } from './../../../models/ui/SemtListe';
import { Semt } from './../../../models/Semt';
import { AddressService } from './../../../services/address.service';
import { AdresIl } from '../../../models/AdresIl';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.page.html',
  styleUrls: ['./create-address.page.scss'],
})
export class CreateAddressPage implements OnInit {
  provinceList: AdresIl[];
  selectedProvince: AdresIl;
  districtList: Semt[];
  selectedDistrict: SemtListe;
  searchableDistrictList: SemtListe[] = [];

  anotherUser = false;
  addressName: string = '';
  addressDesc: string = '';
  location: string = '';
  anotherUserName: string = '';
  anotherUserPhone: string = '';

  constructor(
    private router: Router,
    private addressService: AddressService,
    private authService: AuthService
  ) {}

  provinceChange(event: { component: IonicSelectableComponent; value: any }) {
    this.selectedProvince = event.value;
    if (this.selectedDistrict) {
      this.selectedDistrict = null;
    }
    this.searchableDistrictList = [];
    this.addressService
      .getDistrict(this.selectedProvince.id)
      .subscribe((dist) => {
        this.districtList = dist;
        for (let i = 0; i < this.districtList.length; i++) {
          for (let j = 0; j < this.districtList[i].mahalleler.length; j++) {
            let item = new SemtListe(
              this.districtList[i].mahalleler[j].adi,
              this.districtList[i].mahalleler[j].id,
              this.districtList[i].ilceAdi
            );
            this.searchableDistrictList.push(item);
          }
        }
      });
  }

  districtChange(event: { component: IonicSelectableComponent; value: any }) {
    this.selectedDistrict = event.value;
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

  ngOnInit(): void {
    this.addressService.getAllProvinces().subscribe((pro) => {
      this.provinceList = pro;
    });
  }
}
