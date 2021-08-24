import {
  tipAdlari,
  siparisDurum,
  SiparisService,
} from './../../../services/siparis.service';
import { Router } from '@angular/router';
import { MusteriSiparis } from '../../../models/MusteriSiparis';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siparislerim',
  templateUrl: './siparislerim.page.html',
  styleUrls: ['./siparislerim.page.scss'],
})
export class SiparislerimPage implements OnInit {
  onlyDone = false;
  orderList: MusteriSiparis[] = [];
  liveOrders: MusteriSiparis[] = [];
  tipAdi = tipAdlari;
  durumAdlari = siparisDurum;
  detayGoster: MusteriSiparis;

  constructor(private router: Router, private siparisSrv: SiparisService) {}

  showDetails(order: MusteriSiparis) {
    if (this.detayGoster == order) {
      this.detayGoster = null;
    } else {
      this.detayGoster = order;
    }
  }
  ngOnInit() {
    this.siparisSrv.getOrderList().subscribe((order) => {
      this.orderList = order;
      for (let i = 0; i < this.orderList.length; i++) {
        if (
          this.orderList[i].status == 'YENI_KAYIT_FROM_IOS' ||
          'YENI_KAYIT_FROM_ANDROID ' ||
          'YENI_KAYIT_FROM_WEB'
        ) {
          this.liveOrders.push(this.orderList[i]);
        }
      }
    });
  }

  getOrderStatusName(order: MusteriSiparis): string {
    return this.durumAdlari.get(order.status);
  }
}
