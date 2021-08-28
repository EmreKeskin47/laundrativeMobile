import { SiparisService } from './../../services/siparis.service';
import { FeedbackAlertService } from './../../services/feedback-alert.service';
import { IsletmeService } from './../../services/isletme.service';
import { Component, OnInit } from '@angular/core';
import { MusteriAdres } from './../../models/MusteriAdres';
import { AuthService } from './../../services/auth.service';
import { SemtListe } from '../../models/SemtListe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yeni-siparis',
  templateUrl: './yeni-siparis.page.html',
  styleUrls: ['./yeni-siparis.page.scss'],
})
export class YeniSiparisPage implements OnInit {
  selectedDistrict: SemtListe;
  selectedDate: Date;
  selectedTime: Date;
  selectedAddress: MusteriAdres;
  isLogged = this.authService.getCredentials().token;

  constructor(
    private router: Router,
    private isletmeSrv: IsletmeService,
    private authService: AuthService,
    private alertSrv: FeedbackAlertService,
    private siparisSrv: SiparisService
  ) {}

  ngOnInit(): void {}

  adjustSelectedDistrict(event: SemtListe) {
    this.selectedDistrict = event;
  }

  navigateToStoreList(category: number[]) {
    if (
      (this.isLogged && !this.selectedAddress) ||
      (!this.isLogged && !this.selectedDistrict) ||
      !this.selectedDate ||
      !this.selectedTime
    ) {
      this.alertSrv.errorAlert('Lütfen adres ve zaman seçimi yapınız');
    } else if (
      this.selectedDate.getDate() < new Date().getDate() ||
      (this.selectedDate.getDate() == new Date().getDate() &&
        this.selectedTime.getHours() < new Date().getHours())
    ) {
      this.alertSrv.errorAlert('Geçmiş zaman siparişi verilemez');
    } else if (this.selectedAddress && this.selectedDate && this.selectedTime) {
      this.isletmeSrv.setSelectedTeslimAlma(
        this.selectedTime,
        this.selectedDate
      );
    } else if (
      this.siparisSrv.getSepetSize() !== 0 &&
      category !== this.isletmeSrv.getSelectedKategoriler() &&
      this.isletmeSrv.getSelectedIsletme() !== ''
    ) {
      this.alertSrv.errorAlert('Sepetinizde seçili ürünler var ');
    } else {
      this.isletmeSrv.setSelectedCategoryList(category);
      this.router.navigate([
        'yeni-siparis/hizmet-ekle',
        { kategoriler: category },
      ]);
    }
  }

  timeChange(event: any) {
    this.selectedTime = new Date(event);
  }

  dateChange(event: any) {
    this.selectedDate = new Date(event);
  }
  addressChange(event: MusteriAdres) {
    this.selectedAddress = event;
    this.isletmeSrv.setSelectedDeliveryAddress(event);
  }

  ionViewDidEnter() {}
}
