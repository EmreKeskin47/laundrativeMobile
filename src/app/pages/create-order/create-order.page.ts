import { IonicSelectableComponent } from 'ionic-selectable';
import { AddressService } from './../../services/address.service';
import { District } from './../../models/address/District';
import { Province } from './../../models/address/Province';
import { Institution } from './../../models/Institution';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {
  title = 'mağaza arayın';
  insList: Institution[];
  provinceList: Province[];
  selectedProvince: Province;
  districtList: District[];
  selectedDistrict: District;

  selectedDate: Date;
  selectedTime: Date;

  //Find a better way
  selectedServices: string[] = [];
  isSelected1 = false;
  isSelected2 = false;
  isSelected3 = false;
  isSelected5 = false;
  isSelected6 = false;
  isSelected7 = false;

  image =
    'https://media.istockphoto.com/photos/colorful-clothes-in-laundry-basket-blue-indigo-purple-picture-id119623848?k=6&m=119623848&s=612x612&w=0&h=g8_MG32-0cSlkH4RjBHzMiyH_gGPPg9rObdK-i-FUNk=';

  constructor(private router: Router, private addressService: AddressService) {}

  ngOnInit(): void {
    this.addressService.getAllProvinces().subscribe((pro) => {
      this.provinceList = pro.content;
    });
  }

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
  }

  navigateToStoreList() {
    this.router.navigate([
      '/create-order/available-stores-list',
      {
        neighborhoodId: this.selectedDistrict.neighborhoodId,
        categories: this.selectedServices,
      },
    ]);
  }
  navigateToDetailedSearch() {
    this.router.navigate(['/create-order/detailed-search']);
  }
  navigateToDiscount() {
    this.router.navigate(['/profile/discount-list']);
  }

  laundry() {
    if (this.isSelected1) {
      this.removeFromSelected('1');
    } else {
      this.selectedServices.push('1');
    }
    this.isSelected1 = !this.isSelected1;
  }
  iron() {
    if (this.isSelected2) {
      this.removeFromSelected('2');
    } else {
      this.selectedServices.push('2');
    }
    this.isSelected2 = !this.isSelected2;
  }
  dryClean() {
    if (this.isSelected3) {
      this.removeFromSelected('3');
    } else {
      this.selectedServices.push('3');
    }
    this.isSelected3 = !this.isSelected3;
  }
  terziTadilat() {
    if (this.isSelected6) {
      this.removeFromSelected('6');
    } else {
      this.selectedServices.push('6');
    }
    this.isSelected6 = !this.isSelected6;
  }
  lostra() {
    if (this.isSelected7) {
      this.removeFromSelected('7');
    } else {
      this.selectedServices.push('7');
    }
    this.isSelected7 = !this.isSelected7;
  }
  haliYikama() {
    if (this.isSelected5) {
      this.removeFromSelected('5');
    } else {
      this.selectedServices.push('5');
    }
    this.isSelected5 = !this.isSelected5;
  }

  removeFromSelected(remove: string) {
    for (var i = 0; i < this.selectedServices.length; i++) {
      if (this.selectedServices[i] === remove) {
        this.selectedServices.splice(i, 1);
      }
    }
  }

  timeChange(event: any) {
    this.selectedTime = new Date(event);
  }

  dateChange(event: any) {
    this.selectedDate = new Date(event);
  }
}
