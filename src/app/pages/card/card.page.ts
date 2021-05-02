import { MusteriAdres } from './../../models/MusteriAdres';
import { OrderContent } from './../../models/ui/OrderContent';
import { SiparisOlustur } from './../../models/SiparisOlustur';
import { AuthService } from './../../services/auth.service';
import { Cins } from './../../models/ui/Cins';
import { Isletme } from './../../models/İsletme';
import { CardCostContent } from './../../models/ui/CardCostContent';
import { InstitutionService } from './../../services/institution.service';
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
  dateTime: Date;
  deliveryAddress: MusteriAdres;
  not: string;

  isLogged = this.authService.getCredentials().token;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private institutionService: InstitutionService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.cardItems = this.orderService.currentCardContent;
    this.selectedIns = this.institutionService.selectedInstitution;
    this.insLocation = this.institutionService.locationOfSelected;
    this.currentCardCostContent = this.orderService.currentCardCostContent;
    this.dateTime = this.institutionService.selectedDeliveryDate;
    this.deliveryAddress = this.institutionService.selectedDeliveryAddress;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignup() {
    this.router.navigate(['/signin']);
  }

  async navigateToPayment() {
    var orderContent: OrderContent[] = [];

    for (let i = 0; i < this.cardItems.length; i++) {
      orderContent.push({
        kategoriId: this.cardItems[i].kategori_id,
        cins: this.cardItems[i].cins_id,
        tip: this.cardItems[i].secilenTip,
        kurumId: 0,
        adet: this.cardItems[i].adet,
        fiyat: this.cardItems[i].fiyatlar[this.cardItems[i].secilenTip - 1]
          .fiyat,
        tarih: this.cardItems[i].teslimatTarihi,
      });
    }

    let siparis = new SiparisOlustur(
      '',
      this.deliveryAddress.adres,
      this.deliveryAddress.adres,
      this.dateTime,
      this.not,
      null,
      null,
      (
        this.currentCardCostContent.total + this.currentCardCostContent.totalTax
      ).toString(),
      orderContent
    );
    (await this.orderService.createOrder(siparis)).subscribe((res) =>
      console.log(res, 'sipariş oluştur res')
    );
    this.router.navigate(['card/payment']);
  }
  notChange(event: any) {
    this.not = event.detail.value;
  }

  navigateToStoreMenu(item: Cins) {
    this.orderService.setSelectedKindItem(item);
    this.router.navigate(['create-order/store-menu', {}]);
  }
  ionViewDidEnter() {
    this.cardItems = this.orderService.currentCardContent;
    this.selectedIns = this.institutionService.selectedInstitution;
    this.currentCardCostContent = this.orderService.currentCardCostContent;
    this.dateTime = this.institutionService.selectedDeliveryDate;
    this.insLocation = this.institutionService.locationOfSelected;
    this.deliveryAddress = this.institutionService.selectedDeliveryAddress;
  }
}
