import { Neighborhood } from './../../../models/address/Neighborhood';
import { County } from './../../../models/address/County';
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
  countyList: County[];
  selectedCounty: County;
  neighborhoodList: Neighborhood[];
  selectedNeighborhood: Neighborhood;

  anotherUser = false;

  constructor(private router: Router, private addressService: AddressService) {}

  provinceChange(event: { component: IonicSelectableComponent; value: any }) {
    this.selectedProvince = event.value;
    this.addressService
      .getDistrict(this.selectedProvince.id)
      .subscribe((dist) => {
        this.districtList = dist;
      });
  }

  districtChange(event: { component: IonicSelectableComponent; value: any }) {
    this.selectedDistrict = event.value;
    this.addressService
      .getCounty(this.selectedDistrict.id)
      .subscribe((coun) => {
        this.countyList = coun;
      });
  }

  countyChange(event: { component: IonicSelectableComponent; value: any }) {
    this.selectedCounty = event.value;
    this.addressService
      .getNeighborhood(this.selectedCounty.id)
      .subscribe((neig) => {
        this.neighborhoodList = neig;
      });
  }

  neighborhoodChange(event: {
    component: IonicSelectableComponent;
    value: any;
  }) {
    this.selectedNeighborhood = event.value;
    console.log(this.selectedNeighborhood);
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
