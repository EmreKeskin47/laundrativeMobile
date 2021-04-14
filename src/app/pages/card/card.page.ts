import { Cins } from './../../models/ui/Cins';
import { Isletme } from './../../models/İsletme';
import { CardCostContent } from './../../models/ui/CardCostContent';
import { StoreCardInfo } from './../../models/ui/StoreCardInfo';
import { InstitutionService } from './../../services/institution.service';
import { KindPriceItem } from '../../models/eski/KindPriceItem';
import { OrderService } from './../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  title = 'sepet';

  selectedIns: Isletme;
  cardItems: Cins[];
  currentCardCostContent: CardCostContent;
  insLocation: string;

  isLogged = this.route.snapshot.paramMap.get('isLogged') || false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private institutionService: InstitutionService
  ) {}

  ngOnInit() {
    this.cardItems = this.orderService.currentCardContent;
    this.selectedIns = this.institutionService.selectedInstitution;
    this.insLocation = this.institutionService.locationOfSelected;
    this.currentCardCostContent = this.orderService.currentCardCostContent;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.router.navigate(['/signin']);
  }

  navigateToPayment() {
    this.router.navigate(['card/payment']);
  }

  ConvertStringToNumber(input: string) {
    if (input.trim().length == 0) {
      return NaN;
    }
    return Number(input);
  }

  navigateToStoreMenu(item: Cins) {
    this.orderService.setSelectedKindItem(item);
    this.router.navigate(['create-order/store-menu', {}]);
  }
  ionViewDidEnter() {
    this.cardItems = this.orderService.currentCardContent;
    this.selectedIns = this.institutionService.selectedInstitution;
    this.currentCardCostContent = this.orderService.currentCardCostContent;
  }
}
