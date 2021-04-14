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
  pageTitle = 'yeni adres oluştur';
  provinceList: AdresIl[];
  selectedProvince: AdresIl;
  districtList: Semt[];
  selectedDistrict: SemtListe;
  searchableDistrictList: SemtListe[] = [];

  anotherUser = false;

  constructor(private router: Router, private addressService: AddressService) {}

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

  navigateToAddressList() {
    this.router.navigate(['/profile/add-address-result']);
  }

  ngOnInit(): void {
    this.addressService.getAllProvinces().subscribe((pro) => {
      this.provinceList = pro;
    });
  }
}
