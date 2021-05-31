import { Cins } from './../../models/ui/Cins';
import { KategoriCins } from './../../models/KategoriCins';
import { Isletme } from './../../models/İsletme';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InstitutionService } from './../../services/institution.service';
import { kategoriAdi, OrderService } from './../../services/order.service';
@Component({
  selector: 'app-store-menu',
  templateUrl: './store-menu.page.html',
  styleUrls: ['./store-menu.page.scss'],
})
export class StoreMenuPage implements OnInit {
  pageTitle = 'mağaza detayları';

  selectedIns: Isletme;
  selectedInsLocation: string;

  selected: Cins;
  alreadyAddedToCard: Cins;
  select: boolean;
  storeItemList: KategoriCins[] = [];
  storeMenu: Cins[] = [];
  storeCategories: number[] = [];
  selectedItemImage = null;

  standardDelivery;
  expressDelivery;
  premiumDelivery;

  searchName: string = '';
  searchCategory: number = 0;
  showStoreCategoryOptions = false;
  itemCategoryName = kategoriAdi;

  constructor(
    private orderService: OrderService,
    private institutionService: InstitutionService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.selectedIns = this.institutionService.selectedInstitution;
    this.selectedInsLocation = this.institutionService.locationOfSelected;
    this.standardDelivery = this.institutionService.standardDelivery;
    this.expressDelivery = this.institutionService.expressDelivery;
    this.premiumDelivery = this.institutionService.premiumDelivery;
    this.institutionService
      .getItemsInInstitution(this.selectedIns.kurum_id)
      .subscribe(async (item) => {
        this.storeItemList = item;
        for (let i = 0; i < this.storeItemList.length; i++) {
          this.storeCategories.push(this.storeItemList[i].kategoriId);
          for (let j = 0; j < this.storeItemList[i].cinsler.length; j++) {
            let cins = new Cins(
              this.selectedIns.kurum_id,
              this.storeItemList[i].kategoriId,
              this.storeItemList[i].cinsler[j].cins_resmi,
              this.storeItemList[i].cinsler[j].cins_id,
              this.storeItemList[i].cinsler[j].cins_adi,
              this.storeItemList[i].cinsler[j].fiyatlar,
              this.standardDelivery
            );
            this.storeMenu.push(cins);
          }
        }
      });
  }

  addToCard() {
    this.orderService.setSelectedKindItem(this.selected);
    this.orderService.addToCard(this.selected);
    this.select = false;
    this.selected = null;
    this.searchCategory = 0;
    this.searchName = '';
  }

  removeFromCard() {
    if (this.alreadyAddedToCard) {
      this.orderService.removeFromCard();
    } else {
      this.orderService.removeFromCard();
    }
    this.router.navigate(['/card']);
  }

  updateCard() {
    this.orderService.updateCard(
      this.alreadyAddedToCard.adet,
      this.alreadyAddedToCard.secilenTip
    );
    this.router.navigate(['/card']);
  }

  cancelUpdateCard() {
    this.alreadyAddedToCard = null;
  }

  selectItem(event: any) {
    if (this.selected == event) {
      this.select = false;
      this.selected = null;
    } else {
      this.selected = event;
      this.select = true;
      this.setSelectedImage();
      this.selected.teslimatTarihi = this.standardDelivery;
      this.selected.adet = 1;
      this.selected.secilenTip = 1;
    }
  }

  cancelSelected(cancelled: boolean, rem: boolean) {
    if (rem) {
      this.removeFromCard();
    }
    this.select = cancelled;
    this.selectedItemImage = null;
    if (this.alreadyAddedToCard) {
      this.alreadyAddedToCard = null;
    } else {
      this.selected = null;
    }
  }

  changeTypeOfSelected(event: any) {
    if (this.alreadyAddedToCard) {
      this.alreadyAddedToCard.secilenTip = event;
      if (event == 3) {
        this.alreadyAddedToCard.teslimatTarihi = this.premiumDelivery;
        this.alreadyAddedToCard.secilenTip = 3;
      } else if (event == 2) {
        this.alreadyAddedToCard.teslimatTarihi = this.expressDelivery;
        this.alreadyAddedToCard.secilenTip = 2;
      } else {
        this.alreadyAddedToCard.teslimatTarihi = this.standardDelivery;
        this.alreadyAddedToCard.secilenTip = 1;
      }
    } else {
      this.selected.secilenTip = event;
      if (event == 3) {
        this.selected.teslimatTarihi = this.premiumDelivery;
        this.selected.secilenTip = 3;
      } else if (event == 2) {
        this.selected.teslimatTarihi = this.expressDelivery;
        this.selected.secilenTip = 2;
      } else {
        this.selected.teslimatTarihi = this.standardDelivery;
        this.selected.secilenTip = 1;
      }
    }
  }
  changeAmountOfSelected(event: any) {
    if (this.alreadyAddedToCard) {
      this.alreadyAddedToCard.adet = event;
    } else {
      this.selected.adet = event;
    }
  }

  setSelectedImage() {
    let image = this.selected.cins_resmi;
    this.selectedItemImage = this.sanitizer.bypassSecurityTrustResourceUrl(
      `data:image/png;base64, ${image}`
    );
  }

  onInput(event) {
    this.searchName = event.detail.value;
  }

  onCancel() {
    this.searchName = '';
  }
  ionViewDidEnter() {
    if (
      this.orderService.selectedItem &&
      this.orderService.selectedItem.adet > 0
    ) {
      this.select = true;
      this.alreadyAddedToCard = this.orderService.selectedItem;
      let image = this.orderService.selectedItem.cins_resmi;
      this.selectedItemImage = this.sanitizer.bypassSecurityTrustResourceUrl(
        `data:image/png;base64, ${image}`
      );
    }
  }
  ionViewDidLeave() {
    this.orderService.selectedItem = null;
    this.alreadyAddedToCard = null;
    this.select = false;
    this.onCancel();
    this.showStoreCategoryOptions = false;
  }

  expandServiceOptions() {
    this.showStoreCategoryOptions = !this.showStoreCategoryOptions;
    this.searchCategory = 0;
  }

  categorySelect(event: any) {
    if (event) {
      this.select = false;
      this.selected = null;
      this.searchCategory = event;
    } else {
      this.searchCategory = 0;
    }
  }
}
