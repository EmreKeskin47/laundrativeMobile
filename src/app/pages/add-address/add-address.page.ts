import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  pageTitle = 'adres ekle';

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToRes() {
    this.router.navigate(['/add-address-result']);
  }
}
