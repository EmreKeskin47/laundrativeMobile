import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Cins } from './../../models/ui/Cins';
import { OrderService, kategoriAdi } from './../../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sepet',
  templateUrl: './sepet.page.html',
  styleUrls: ['./sepet.page.scss'],
})
export class SepetPage implements OnInit {
  sepet: Cins[] = [];
  itemCategoryName = kategoriAdi;
  not: string;
  isLogged = this.authService.getCredentials().token;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sepet = this.orderService.getSelectedItems();
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
