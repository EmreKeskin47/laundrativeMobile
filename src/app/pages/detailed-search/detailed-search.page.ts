import { kategoriAdi } from './../../services/order.service';
import { MusteriAdres } from './../../models/MusteriAdres';
import { AuthService } from './../../services/auth.service';
import { DetayliArama } from './../../models/DetayliArama';
import { SemtListe } from './../../models/ui/SemtListe';
import { Semt } from './../../models/Semt';
import { Isletme } from './../../models/İsletme';
import { InstitutionService } from './../../services/institution.service';
import { AddressService } from './../../services/address.service';
import { AdresIl } from './../../models/AdresIl';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detailed-search',
  templateUrl: './detailed-search.page.html',
  styleUrls: ['./detailed-search.page.scss'],
})
export class DetailedSearchPage implements OnInit {
  pageTitle = 'detaylı arama';
  selectedAddress: MusteriAdres;
  selectedDate: Date;
  selectedTime: Date;
  selectedDeliveryDate: Date;
  selectedDeliveryTime: Date;

  promosyonFilter: boolean = false;
  freeDeliver: boolean = false;

  provinceList: AdresIl[];
  selectedProvince: AdresIl;
  districtList: Semt[];
  selectedDistrict: SemtListe;
  searchableDistrictList: SemtListe[] = [];

  instList: Isletme[] = [];

  searchResult: DetayliArama[] = [];
  textInput: string = '';
  selectedSearchResult = [];

  isLogged = this.authService.getCredentials().token;

  itemCategoryName = kategoriAdi;

  constructor(
    private router: Router,
    private addressService: AddressService,
    private institutionService: InstitutionService,
    private authService: AuthService,
    public alertController: AlertController
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

  searchText(event: any) {
    this.textInput = event.detail.value;
    this.institutionService
      .searchInEveryIns(this.textInput)
      .subscribe((item) => (this.searchResult = item));
  }

  setSelected(item) {
    let duplicate = this.selectedSearchResult.find(
      (selected) =>
        selected.isim == item.isim && selected.kategori == item.kategori
    );
    if (!duplicate) {
      this.selectedSearchResult.push(item);
    }
  }

  deleteSelected(item) {
    const index = this.selectedSearchResult.indexOf(item);
    if (index > -1) {
      this.selectedSearchResult.splice(index, 1);
    }
  }

  addressChange(event: MusteriAdres) {
    this.selectedAddress = event;
    this.institutionService.setSelectedDeliveryAddress(event);
  }

  navigateToStoreList() {
    if (this.selectedDate > this.selectedDeliveryDate) {
      this.dateAlert();
    } else {
      this.institutionService
        .detailedSearch(
          3,
          this.selectedDate,
          this.selectedTime,
          this.selectedDeliveryDate,
          this.selectedDeliveryTime,
          this.freeDeliver
        )
        .subscribe((ins) => {
          this.instList = ins;
          this.institutionService.currentInstitutionList = ins;
        });

      this.router.navigate(['/create-order/available-stores-list']);
    }
  }

  dateAlert = async () => {
    const alert = await this.alertController.create({
      header: 'Teslim alma tarihi, teslim etme tarihinden önce olmalıdır',
      buttons: [
        {
          text: 'Anladım',
          handler: () => {},
        },
      ],
    });
    await alert.present();
  };
}
