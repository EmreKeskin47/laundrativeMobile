import { AddressService } from './../../services/address.service';
import { AdresIl } from './../../models/AdresIl';
import { SemtListe } from './../../models/ui/SemtListe';
import { Semt } from './../../models/Semt';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-city-district-picker',
  templateUrl: './city-district-picker.component.html',
  styleUrls: ['./city-district-picker.component.scss'],
})
export class CityDistrictPickerComponent implements OnInit {
  @Output() selectedSemt = new EventEmitter<SemtListe>();

  provinceList: AdresIl[];
  selectedProvince: AdresIl;
  districtList: Semt[];
  selectedDistrict: SemtListe;
  searchableDistrictList: SemtListe[] = [];

  constructor(private addressService: AddressService) {}

  ngOnInit() {
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
    this.selectedSemt.emit(this.selectedDistrict);
  }
}
