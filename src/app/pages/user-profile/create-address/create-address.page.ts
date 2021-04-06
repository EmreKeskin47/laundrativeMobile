import { District } from './../../../models/address/District';
import { AddressService } from './../../../services/address.service';
import { Province } from './../../../models/address/province';
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
  provinceList: Province[];
  selectedProvince: Province;
  districtList: District[];
  selectedDistrict: District;

  anotherUser = false;

  constructor(private router: Router, private addressService: AddressService) {}

  provinceChange(event: { component: IonicSelectableComponent; value: any }) {
    this.selectedProvince = event.value;
    if (this.selectedDistrict) {
      this.selectedDistrict = null;
    }
    this.addressService
      .getDistrict(this.selectedProvince.provinceId)
      .subscribe((dist) => {
        this.districtList = dist.content;
        this.districtList.forEach((dist) => {
          dist.listName =
            dist.districtName + '( ' + dist.neighborhoodName + ' )';
        });
      });
  }

  districtChange(event: { component: IonicSelectableComponent; value: any }) {
    this.selectedDistrict = event.value;
    console.log(event.value);
  }

  onChange() {
    this.anotherUser = !this.anotherUser;
  }

  navigateToAddressList() {
    this.router.navigate(['/profile/add-address-result']);
  }

  getGroupText(district: District, index: number, districts: District[]): any {
    if (
      index === 0 ||
      district.neighborhoodId !== districts[index - 1].neighborhoodId
    ) {
      return district.districtName;
    }
    return null;
  }

  ngOnInit(): void {
    this.addressService.getAllProvinces().subscribe((pro) => {
      this.provinceList = pro.content;
    });
  }
}
