import { KindPriceItem } from './../../models/KindPriceItem';
import { InstitutionService } from './../../services/institution.service';
import { OrderService } from './../../services/order.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-store-menu',
  templateUrl: './store-menu.page.html',
  styleUrls: ['./store-menu.page.scss'],
})
export class StoreMenuPage implements OnInit {
  pageTitle = 'mağaza detayları';

  storeName: string = '';
  location: string = '';
  minFee: string = '';
  discountFee: string = '';
  storeID: string = '';
  selected: KindPriceItem;
  select: boolean = false;

  storeItemList = [];
  selectedItemImage = null;

  constructor(
    private orderService: OrderService,
    private institutionService: InstitutionService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.storeName = this.route.snapshot.paramMap.get('storeName');
    this.location = this.route.snapshot.paramMap.get('storeLocation');
    this.minFee = this.route.snapshot.paramMap.get('minFee');
    this.discountFee = this.route.snapshot.paramMap.get('freeDeliver');
    this.storeID = this.route.snapshot.paramMap.get('id');
    this.institutionService
      .getItemsInInstitution(this.storeID)
      .subscribe(async (item) => {
        this.storeItemList = item[0].kindPriceList;
      });
  }

  addToCard() {
    this.orderService.addToCard(
      this.selected.kindId,
      this.selected.kindName,
      this.selected.kindImage,
      this.selected.type,
      this.selected.price
    );
    this.select = false;
    this.selected = null;
    this.institutionService.setSelectedInstituion(
      this.storeName,
      this.location,
      this.minFee,
      this.discountFee,
      this.storeID
    );
  }

  selectItem(event: any) {
    this.selected = event;
    this.select = true;
    this.setSelectedImage();
  }

  selectFromSearch(event: { component: IonicSelectableComponent; value: any }) {
    this.selected = event.value;
    this.select = true;
    this.setSelectedImage();
  }

  cancelSelected(cancelled: boolean) {
    this.select = cancelled;
    this.selected = null;
    this.selectedItemImage = null;
  }

  changeTypeOfSelected(event: any) {
    this.selected.type = event;
  }

  setSelectedImage() {
    let image = this.selected.kindImage;
    this.selectedItemImage = this.sanitizer.bypassSecurityTrustResourceUrl(
      `data:image/png;base64, ${image}`
    );
  }
}
