import { FeedbackAlertService } from './../../../services/feedback-alert.service';
import { AdresDuzenle } from '../../../models/AdresDuzenle';
import { MusteriAdres } from './../../../models/MusteriAdres';
import { AddressService } from './../../../services/address.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.page.html',
  styleUrls: ['./address-list.page.scss'],
})
export class AddressListPage implements OnInit {
  pageTitle = 'adreslerim';
  adresList: MusteriAdres[] = [];
  seciliAdres: MusteriAdres;
  editPressed = false;

  constructor(
    private router: Router,
    private addressService: AddressService,
    private alertSrv: FeedbackAlertService
  ) {}

  navigateToCreateAddress() {
    this.router.navigate(['profile/create-address']);
  }

  ngOnInit() {
    this.addressService.getAddressOfCustomer().subscribe((address) => {
      this.adresList = address;
      console.log(address, 'adreslisteis');
    });
  }

  updateList() {
    this.addressService.getAddressOfCustomer().subscribe((address) => {
      this.adresList = address;
    });
  }
  deleteSuccess() {
    this.router.navigate(['profile']);
  }

  adresBasligi(event: any) {
    this.seciliAdres.adresBasligi = event.detail.value;
  }
  adres(event: any) {
    this.seciliAdres.adres = event.detail.value;
  }
  teslimAlanAdi(event: any) {
    this.seciliAdres.teslimAlanAdi = event.detail.value;
  }
  teslimAlanTel(event: any) {
    this.seciliAdres.teslimAlanTel = event.detail.value;
  }

  editClicked(address: MusteriAdres) {
    this.editPressed = true;
    if (this.seciliAdres == address) {
      this.seciliAdres = null;
    } else {
      this.seciliAdres = address;
    }
  }

  deleteClicked() {
    this.addressService
      .deleteAdress(this.seciliAdres.adresId)
      .subscribe((res) => {
        if (res) {
        }
      });
  }

  updateClicked() {
    let update = new AdresDuzenle(
      this.seciliAdres.adresId,
      this.seciliAdres.mahalleId,
      this.seciliAdres.adresBasligi,
      this.seciliAdres.adres,
      this.seciliAdres.teslimAlanAdi,
      this.seciliAdres.teslimAlanTel
    );
    this.addressService.editAddress(update).subscribe((res) => {
      console.log(res, 'update adress res');
      this.editPressed = false;
      this.seciliAdres = null;
      if (res.result == 'ok') {
        this.alertSrv.successAlert('Adres Güncellendi');
      } else {
        this.alertSrv.errorAlert('Adres Güncelleme hatası');
      }
    });
  }
}
