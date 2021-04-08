import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WorkingHours } from './../../models/WorkingHours';
import { StoreCardInfo } from './../../models/ui/StoreCardInfo';
import { KindPriceItem } from './../../models/KindPriceItem';
import { InstitutionService } from './../../services/institution.service';
import { OrderService } from './../../services/order.service';
@Component({
  selector: 'app-store-menu',
  templateUrl: './store-menu.page.html',
  styleUrls: ['./store-menu.page.scss'],
})
export class StoreMenuPage implements OnInit {
  pageTitle = 'mağaza detayları';

  selectedIns: StoreCardInfo;
  selected: KindPriceItem;
  alreadyAddedToCard: KindPriceItem;
  select: boolean;

  storeItemList = [];
  selectedItemImage = null;

  workingHoursOfSelectedIns: WorkingHours[] = [];
  standardDelivery;
  expressDelivery;
  premiumDelivery;

  searchName: string = '';

  showStoreServiceOptions = false;

  constructor(
    private orderService: OrderService,
    private institutionService: InstitutionService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.selectedIns = this.institutionService.selectedInstitution;
    this.institutionService
      .getItemsInInstitution(this.selectedIns.storeID)
      .subscribe(async (item) => {
        this.storeItemList = item[0].kindPriceList;
      });
    this.institutionService
      .getWorkingHours(this.selectedIns.storeID)
      .subscribe(async (hour) => {
        for (let i = 0; i < hour.length; i++) {
          this.workingHoursOfSelectedIns[i + 1] = hour[i];
        }
        this.calculateDeliveryTime();
      });
  }

  addToCard() {
    this.orderService.addToCard(this.selected);
    this.select = false;
    this.selected = null;
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
      this.alreadyAddedToCard.amount,
      this.alreadyAddedToCard.type
    );
    this.router.navigate(['/card']);
  }

  selectItem(event: any) {
    this.selected = event;
    this.select = true;
    this.setSelectedImage();
    this.selected.type = 1;
    this.selected.deliveryDate = this.standardDelivery;
    this.selected.amount = 1;
  }

  cancelSelected(cancelled: boolean) {
    this.removeFromCard();
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
      this.alreadyAddedToCard.type = event;
      if (event == 3) {
        this.alreadyAddedToCard.deliveryDate = this.premiumDelivery;
      } else if (event == 2) {
        this.alreadyAddedToCard.deliveryDate = this.expressDelivery;
      } else {
        this.alreadyAddedToCard.deliveryDate = this.standardDelivery;
      }
    } else {
      this.selected.type = event;
      if (event == 3) {
        this.selected.deliveryDate = this.premiumDelivery;
      } else if (event == 2) {
        this.selected.deliveryDate = this.expressDelivery;
      } else {
        this.selected.deliveryDate = this.standardDelivery;
      }
    }
  }
  changeAmountOfSelected(event: any) {
    if (this.alreadyAddedToCard) {
      this.alreadyAddedToCard.amount = event;
    } else {
      this.selected.amount = event;
    }
  }

  setSelectedImage() {
    let image = this.selected.kindImage;
    this.selectedItemImage = this.sanitizer.bypassSecurityTrustResourceUrl(
      `data:image/png;base64, ${image}`
    );
  }

  calculateDeliveryTime() {
    const openDate = new Date();
    let open = this.calculateAvailableDayHour(
      openDate.getDay(),
      openDate.getHours()
    );
    openDate.setHours(openDate.getHours() + open.daysToAdd * 24);
    openDate.setHours(open.hour);
    openDate.setMinutes(0);

    //standart type
    let standard = new Date(openDate.getTime());
    standard.setHours(openDate.getHours() + 48);
    let std = this.calculateAvailableDayHour(
      standard.getDay(),
      standard.getHours()
    );
    standard.setHours(std.hour);
    this.standardDelivery = standard;

    //express
    let express = new Date(openDate.getTime());
    express.setHours(openDate.getHours() + 24);
    let exp = this.calculateAvailableDayHour(
      express.getDay(),
      express.getHours()
    );
    express.setHours(exp.hour);
    this.expressDelivery = express;

    //premium
    let premium = new Date(openDate.getTime());
    premium.setHours(openDate.getHours() + 3);
    let prm = this.calculateAvailableDayHour(
      premium.getDay(),
      premium.getHours()
    );
    premium.setHours(prm.hour);
    this.premiumDelivery = premium;
  }

  calculateAvailableDayHour(
    day: number,
    hour: number
  ): { day: number; hour: number; daysToAdd: number } {
    //if store is open in selected day
    for (let i = day; i <= 7; i++) {
      //if store is open in current
      if (this.workingHoursOfSelectedIns[i]) {
        let openTime = parseInt(
          this.workingHoursOfSelectedIns[i].startingTime.slice(0, 2)
        );
        let closeTime = parseInt(
          this.workingHoursOfSelectedIns[i].endingTime.slice(0, 2)
        );
        if (i != day) {
          return { day: i, hour: openTime, daysToAdd: Math.abs(day - i) };
        } else if (openTime < hour && closeTime > hour) {
          return { day: i, hour: hour, daysToAdd: Math.abs(day - i) };
        }
      } else if (i == 7) {
        i = 1;
      }
    }
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
      this.orderService.selectedItem.kindId > 0
    ) {
      this.select = true;
      this.alreadyAddedToCard = this.orderService.selectedItem;
      let image = this.orderService.selectedItem.kindImage;
      this.selectedItemImage = this.sanitizer.bypassSecurityTrustResourceUrl(
        `data:image/png;base64, ${image}`
      );
    }
  }
  ionViewDidLeave() {
    this.orderService.selectedItem = null;
    this.alreadyAddedToCard = null;
    this.select = false;
  }

  expandServiceOptions() {
    this.showStoreServiceOptions = !this.showStoreServiceOptions;
  }
}
