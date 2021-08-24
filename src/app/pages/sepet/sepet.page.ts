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
  isLogged = this.authService.getCredentials().token;

  constructor(
    private siparisSrv: SiparisService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sepet = this.siparisSrv.getSelectedItems();
    console.log(this.sepet);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.router.navigate(['/signin']);
  }

  notChange(event: any) {
    this.not = event.detail.value;
  }

  navigateToPayment() {}
}
