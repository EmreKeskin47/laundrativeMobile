import { Router } from '@angular/router';
import { Address } from './../../../../models/ui/Address';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.page.html',
  styleUrls: ['./address-list.page.scss'],
})
export class AddressListPage implements OnInit {
  pageTitle = 'adreslerim';

  tempAddress = new Address(
    'ev adresim',
    'ümit mahallesi, çankaya, ankara',
    'efe çobanoğlu',
    '535 867 18 97',
    '312 290 41 19',
    '2518. sok. kermes sitesi 3. blok no:44',
    'https://goo.gl/maps/R8PMLM7z4FWGFHRB7'
  );

  constructor(private router: Router) {}

  navigateToCreateAddress() {
    this.router.navigate(['profile/create-address']);
  }
  ngOnInit() {}
}
