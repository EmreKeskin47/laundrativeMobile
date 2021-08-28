import { SiparisService } from './../../services/siparis.service';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Hizmet } from '../../models/Hizmet';
import { kategoriAdi } from './../../services/siparis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sepet',
  templateUrl: './sepet.page.html',
  styleUrls: ['./sepet.page.scss'],
})
export class SepetPage implements OnInit {
  sepet: Hizmet[] = [];
  itemCategoryName = kategoriAdi;
  not: string;
  toplam: number;
  isLogged = this.authService.getCredentials().token;

  constructor(
    private siparisSrv: SiparisService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sepet = this.siparisSrv.getSepeteEklenenler();
    this.getToplamFromServis();
  }

  notChange(event: any) {
    this.not = event.detail.value;
  }

  urunSecim(item: Hizmet) {
    this.siparisSrv.sepeteEkle(item);
    this.getToplamFromServis();
  }

  adetEksi(item: Hizmet) {
    this.siparisSrv.sepettenEksilt(item);
    this.getToplamFromServis();
  }

  getToplamFromServis() {
    this.toplam = this.siparisSrv.getSepetTotal();
  }

  navigateToPayment() {}
}
