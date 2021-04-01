import { StoreCardInfo } from './../../models/ui/StoreCardInfo';
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

  selectedIns: StoreCardInfo;
  selected: KindPriceItem;
  select: boolean;

  storeItemList = [];
  selectedItemImage = null;
  amount: number = 0;

  constructor(
    private orderService: OrderService,
    private institutionService: InstitutionService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    route.params.subscribe(() => {
      if (this.orderService.selectedItem.kindId > 0) {
        this.select = true;
        this.selected = this.orderService.selectedItem;
        this.selectedItemImage = this.orderService.selectedItem.kindImage;
        this.setSelectedImage();
      }
    });
  }

  ngOnInit() {
    this.selectedIns = this.institutionService.selectedInstitution;
    this.institutionService
      .getItemsInInstitution(this.selectedIns.storeID)
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
      this.selected.price,
      this.amount
    );
    this.select = false;
    this.selected = null;
  }

  removeFromCard() {
    this.orderService.removeFromCard(this.selected.kindId, this.selected.price);
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
    this.removeFromCard();
    this.select = cancelled;
    this.selected = null;
    this.selectedItemImage = null;
  }

  changeTypeOfSelected(event: any) {
    this.selected.type = event;
  }
  changeAmountOfSelected(event: any) {
    this.amount = event;
  }

  setSelectedImage() {
    let image = this.selected.kindImage;
    this.selectedItemImage = this.sanitizer.bypassSecurityTrustResourceUrl(
      `data:image/png;base64, ${image}`
    );
  }
}
