import { CardItem } from './../../models/ui/CardItem';
import { OrderService } from './../../services/order.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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

  selected: CardItem;
  select: boolean = false;

  tempStoreItemList: CardItem[] = [
    {
      id: 1,
      itemName: 'Nevresim Takımı Tek Kişilik ',
      itemCost: 20,
      type: 1,
      deliveryDate: '12.02.2020',
      itemIcon: 'bed-outline',
    },
    {
      id: 2,
      itemName: 'Elyaf Yastık  ',
      itemCost: 15,
      type: 1,
      deliveryDate: '12.02.2020',
      itemIcon: 'bed-outline',
    },
    {
      id: 3,
      itemName: 'Battaniye Tek Kişilik ',
      itemCost: 15,
      type: 1,
      deliveryDate: '12.02.2020',
      itemIcon: 'bed-outline',
    },
    {
      id: 4,
      itemName: '1 makina çamaşır yıkama ',
      itemCost: 25,
      type: 1,
      deliveryDate: '12.02.2020',
      itemIcon: 'bed-outline',
    },
    {
      id: 5,
      itemName: 'Nevresim Takımı Tek Kişilik ',
      itemCost: 20,
      type: 1,
      deliveryDate: '12.02.2020',
      itemIcon: 'bed-outline',
    },
    {
      id: 6,
      itemName: 'Elyaf Yastık  ',
      itemCost: 15,
      type: 1,
      deliveryDate: '12.02.2020',
      itemIcon: 'bed-outline',
    },
    {
      id: 7,
      itemName: 'Battaniye Tek Kişilik ',
      itemCost: 15,
      type: 1,
      deliveryDate: '12.02.2020',
      itemIcon: 'bed-outline',
    },
    {
      id: 8,
      itemName: '1 makina çamaşır yıkama ',
      itemCost: 25,
      type: 1,
      deliveryDate: '12.02.2020',
      itemIcon: 'bed-outline',
    },
  ];

  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit() {}

  addToCard() {
    this.orderService.addToCard(
      this.selected.id,
      this.selected.itemName,
      this.selected.itemCost,
      this.selected.type,
      this.selected.deliveryDate,
      this.selected.itemIcon
    );
    this.select = false;
    this.selected = null;
  }

  selectItem(event: any) {
    this.selected = event;
    this.select = true;
  }

  selectFromSearch(event: { component: IonicSelectableComponent; value: any }) {
    this.selected = event.value;
    this.select = true;
  }

  cancelSelected(cancelled: boolean) {
    this.select = cancelled;
    this.selected = null;
  }

  changeTypeOfSelected(event: any) {
    this.selected.type = event;
  }
}
