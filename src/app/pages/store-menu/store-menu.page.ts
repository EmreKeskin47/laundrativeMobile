import { Cins } from './../../models/ui/Cins';
import { KategoriCins } from './../../models/KategoriCins';
import { Isletme } from './../../models/İsletme';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { WorkingHours } from '../../models/eski/WorkingHours';
import { KindPriceItem } from '../../models/eski/KindPriceItem';
import { InstitutionService } from './../../services/institution.service';
import { OrderService } from './../../services/order.service';
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
    this.selectedInsLocation = this.institutionService.locationOfSelected;
    this.institutionService
      .getItemsInInstitution(this.selectedIns.kurum_id)
      .subscribe(async (item) => {
        this.storeItemList = item;
        console.log(item, 'store list');
      });
  }

  addToCard() {
    this.orderService.addToCard(this.selected);
    this.select = false;
    this.selected = null;
  }
  removeFromCard() {
    if (this.alreadyAddedToCard) {
      //this.orderService.removeFromCard();
    } else {
      //this.orderService.removeFromCard();
    }
    this.router.navigate(['/card']);
  }
  updateCard() {
    /*
    this.orderService.updateCard(
      this.alreadyAddedToCard.amount,
      this.alreadyAddedToCard.type
    );
    this.router.navigate(['/card']);
    */
  }

  selectItem(event: any) {
    this.selected = event;
    this.select = true;
    this.setSelectedImage();
    this.selected.secilenTip = 1;
    this.selected.teslimatTarihi = this.standardDelivery;
    this.selected.adet = 1;
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
      this.alreadyAddedToCard.secilenTip = event;
      if (event == 3) {
        this.alreadyAddedToCard.teslimatTarihi = this.premiumDelivery;
      } else if (event == 2) {
        this.alreadyAddedToCard.teslimatTarihi = this.expressDelivery;
      } else {
        this.alreadyAddedToCard.teslimatTarihi = this.standardDelivery;
      }
    } else {
      this.selected.secilenTip = event;
      if (event == 3) {
        this.selected.teslimatTarihi = this.premiumDelivery;
      } else if (event == 2) {
        this.selected.teslimatTarihi = this.expressDelivery;
      } else {
        this.selected.teslimatTarihi = this.standardDelivery;
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
  }

  expandServiceOptions() {
    this.showStoreServiceOptions = !this.showStoreServiceOptions;
  }
}
