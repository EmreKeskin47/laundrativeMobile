import { InstitutionService } from './../../services/institution.service';
import { AddressService } from './../../services/address.service';
import { District } from './../../models/eski/District';
import { AdresIl } from './../../models/AdresIl';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-detailed-search',
  templateUrl: './detailed-search.page.html',
  styleUrls: ['./detailed-search.page.scss'],
})
export class DetailedSearchPage implements OnInit {
  pageTitle = 'detaylı arama';
  selectedDate: Date;
  selectedTime: Date;
  selectedDeliveryDate: Date;
  selectedDeliveryTime: Date;

  promosyonFilter: boolean = false;
  freeDeliver: boolean = false;

  provinceList: AdresIl[];
  selectedProvince: AdresIl;
  districtList: District[];
  selectedDistrict: District;

  constructor(
    private router: Router,
    private addressService: AddressService,
    private institutionService: InstitutionService
  ) {}

  ngOnInit(): void {
    this.addressService.getAllProvinces().subscribe((pro) => {
      this.provinceList = pro;
    });
  }

  provinceChange(event: { component: IonicSelectableComponent; value: any }) {
    this.selectedProvince = event.value;
    if (this.selectedDistrict) {
      this.selectedDistrict = null;
    }
    this.addressService
      .getDistrict(this.selectedProvince.id)
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
  }

  navigateToStoreList() {
    this.institutionService
      .detailedSearch(
        3,
        this.selectedDate,
        this.selectedTime,
        this.selectedDeliveryDate,
        this.selectedDeliveryTime,
        1,
        this.freeDeliver
      )
      .subscribe((ins) => {
        console.log(ins);
      });
    this.router.navigate(['/create-order/available-stores-list']);
  }
  timeChange(event: any) {
    this.selectedTime = new Date(event);
  }

  dateChange(event: any) {
    this.selectedDate = new Date(event);
  }
  deliveryTimeChange(event: any) {
    this.selectedDeliveryTime = new Date(event);
  }

  deliveryDateChange(event: any) {
    this.selectedDeliveryDate = new Date(event);
  }
  promosyon() {
    this.promosyonFilter = !this.promosyonFilter;
  }

  freeDelivery() {
    this.freeDeliver = !this.freeDeliver;
  }
}
