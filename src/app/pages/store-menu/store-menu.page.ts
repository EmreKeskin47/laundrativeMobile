import { IonicSelectableComponent } from 'ionic-selectable';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface tempStoreItems {
  id: number;
  itemName: string;
  itemCost: number;
}
@Component({
  selector: 'app-store-menu',
  templateUrl: './store-menu.page.html',
  styleUrls: ['./store-menu.page.scss'],
})
export class StoreMenuPage implements OnInit {
  pageTitle = 'mağaza detayları';

  storeName = 'Bil wash laundry ';
  location = 'ümitköy mah. çankaya';
  timeInterval = '09:30-17:00';
  day = 'Hemen teslim alabilir';
  minFee = '40,00tl';

  discountFee = '50,00tl ';
  discountText = 'üzeri siparişlerde ücretsiz servis';

  selected: tempStoreItems;
  select: boolean = false;

  tempStoreItemList: tempStoreItems[] = [
    { id: 1, itemName: 'Nevresim Takımı Tek Kişilik ', itemCost: 20 },
    { id: 2, itemName: 'Elyaf Yastık  ', itemCost: 15 },
    { id: 3, itemName: 'Battaniye Tek Kişilik ', itemCost: 15 },
    { id: 4, itemName: '1 makina çamaşır yıkama ', itemCost: 25 },
    { id: 5, itemName: 'Nevresim Takımı Tek Kişilik ', itemCost: 20 },
    { id: 6, itemName: 'Elyaf Yastık  ', itemCost: 15 },
    { id: 7, itemName: 'Battaniye Tek Kişilik ', itemCost: 15 },
    { id: 8, itemName: '1 makina çamaşır yıkama ', itemCost: 25 },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToCard() {
    this.router.navigate(['/card', { isLogged: true }]);
  }

  selectItem(event: any) {
    this.selected = event;
    this.select = true;
  }

  selectFromSearch(event: { component: IonicSelectableComponent; value: any }) {
    console.log(event);
    this.selected = event.value;
    this.select = true;
  }

  cancelSelected(cancelled: boolean) {
    this.select = cancelled;
    this.selected = null;
  }
}
