import { AuthService } from './../../services/auth.service';
import { Isletme } from './../../models/İsletme';
import { SemtListe } from './../../models/ui/SemtListe';
import { Semt } from './../../models/Semt';
import { InstitutionService } from './../../services/institution.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { AddressService } from './../../services/address.service';
import { AdresIl } from '../../models/AdresIl';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {
  title = 'mağaza arayın';
  insList: Isletme[];
  provinceList: AdresIl[] = [];
  selectedProvince: AdresIl;
  districtList: Semt[] = [];
  searchableDistrictList: SemtListe[] = [];
  selectedDistrict: SemtListe;

  selectedDate: Date;
  selectedTime: Date;

  //Find a better way
  selectedServices: number[] = [];
  isSelected1 = false;
  isSelected2 = false;
  isSelected3 = false;
  isSelected5 = false;
  isSelected6 = false;
  isSelected7 = false;

  image =
    'https://media.istockphoto.com/photos/colorful-clothes-in-laundry-basket-blue-indigo-purple-picture-id119623848?k=6&m=119623848&s=612x612&w=0&h=g8_MG32-0cSlkH4RjBHzMiyH_gGPPg9rObdK-i-FUNk=';

  constructor(
    private router: Router,
    private addressService: AddressService,
    private institutionService: InstitutionService,
    private authService: AuthService
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

  navigateToStoreList() {
    let user = this.authService.getCredentials();
    this.institutionService
      .getInstitutionsInNeighborhood(
        3,
        this.selectedServices,
        this.selectedDate,
        this.selectedTime,
        user.token
      )
      .subscribe((inst) => {
        this.insList = inst;
        this.institutionService.currentInstitutionList = inst;
      });
    this.router.navigate([
      '/create-order/available-stores-list',
      { mahalleAdi: this.selectedDistrict.listeAdi },
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
      this.removeFromSelected(1);
    } else {
      this.selectedServices.push(1);
    }
    this.isSelected1 = !this.isSelected1;
  }
  iron() {
    if (this.isSelected2) {
      this.removeFromSelected(2);
    } else {
      this.selectedServices.push(2);
    }
    this.isSelected2 = !this.isSelected2;
  }
  dryClean() {
    if (this.isSelected3) {
      this.removeFromSelected(3);
    } else {
      this.selectedServices.push(3);
    }
    this.isSelected3 = !this.isSelected3;
  }
  terziTadilat() {
    if (this.isSelected6) {
      this.removeFromSelected(6);
    } else {
      this.selectedServices.push(6);
    }
    this.isSelected6 = !this.isSelected6;
  }
  lostra() {
    if (this.isSelected7) {
      this.removeFromSelected(7);
    } else {
      this.selectedServices.push(7);
    }
    this.isSelected7 = !this.isSelected7;
  }
  haliYikama() {
    if (this.isSelected5) {
      this.removeFromSelected(5);
    } else {
      this.selectedServices.push(5);
    }
    this.isSelected5 = !this.isSelected5;
  }

  removeFromSelected(remove: number) {
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
