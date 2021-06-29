import { Component, OnInit } from '@angular/core';
import { MusteriAdres } from './../../models/MusteriAdres';
import { AuthService } from './../../services/auth.service';
import { SemtListe } from './../../models/ui/SemtListe';
import { InstitutionService } from './../../services/institution.service';
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
    private institutionService: InstitutionService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  adjustSelectedDistrict(event: SemtListe) {
    this.selectedDistrict = event;
  }

  navigateToStoreList(category: number[]) {
    this.institutionService.setSelectedCategoryList(category);
    this.router.navigate([
      'yeni-siparis/hizmet-ekle',
      { kategoriler: category },
    ]);
  }

  timeChange(event: any) {
    this.selectedTime = new Date(event);
  }

  dateChange(event: any) {
    this.selectedDate = new Date(event);
  }
  addressChange(event: MusteriAdres) {
    this.selectedAddress = event;
    this.institutionService.setSelectedDeliveryAddress(event);
  }

  ionViewDidEnter() {
    this.selectedDistrict = null;
  }
}
