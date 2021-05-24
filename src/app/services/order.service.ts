import { DeviceInfoService } from './device-info.service';
import { SiparisOlustur } from './../models/SiparisOlustur';
import { AuthService } from './auth.service';
import { MusteriSiparis } from './../models/MusteriSiparis';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './../api/baseUrl';
import { Cins } from './../models/ui/Cins';
import { CardCostContent } from './../models/ui/CardCostContent';
import { Injectable } from '@angular/core';

export const tipAdlari = { 3: 'prm', 2: 'exp', 1: 'std', 0: 'std' };
export const kategoriAdi = {
  1: 'çamaşır yıkama',
  2: 'ütüleme',
  3: 'kuru temizleme',
  4: 'extra',
  5: 'halı yıkama',
  6: 'terzi',
  7: 'lostra',
};

export const indirimAdi = {
  1: 'kurum',
  2: 'musteri',
  3: 'özel',
  4: 'indirim yok',
  5: 'kampanya',
};

export const siparisDurum = {
  0: 'teslim alınacak',
  1: 'hazırlanıyor',
  2: 'hazır',
  3: 'teslim edildi',
  4: 'teslim edilemedi',
  5: 'gecikti',
};

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url = `${BASE_URL}/siparis`;

  currentCardContent: Cins[] = [];
  currentCardCostContent: CardCostContent = new CardCostContent(0, 0, 0);
  selectedItem: Cins;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private devInfo: DeviceInfoService
  ) {}

  getOrderList(): Observable<MusteriSiparis[]> {
    let user = this.authService.getCredentials();
    try {
      return this.http.get<any>(`${this.url}/liste?token=${user.token}`);
    } catch (err) {
      console.log('err in GET order list of customer');
    }
  }

  deleteOrderWithId(id: string): Observable<any> {
    let user = this.authService.getCredentials();
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id,
        token: user.token,
      },
    };
    try {
      return this.http.delete<any>(`${this.url}/liste`, options);
    } catch (err) {
      console.log('err in DELETE order of customer');
    }
  }

  async createOrder(siparis: SiparisOlustur) {
    let user = this.authService.getCredentials();
    let os = this.devInfo.currentPlatform;
    let dev = await this.devInfo.setOtherDeviceInfo();
    console.log(JSON.stringify(dev));

    var data = {
      token: user.token,
      isletimSistemi: os,
      isletimSistemiBilgisi: dev,
      ...siparis,
    };
    var body = JSON.stringify(data);
    console.log(body);

    try {
      return this.http.post<any>(`${this.url}/olustur`, body);
    } catch (err) {
      console.log('err in POST order', err);
    }
  }

  setSelectedKindItem(item: Cins) {
    this.selectedItem = item;
  }

  addToCard(item: Cins) {
    // if another kurum is selected current card content must be empty - if not alert
    if (
      this.currentCardContent.length > 0 &&
      this.currentCardContent[0].kurum_id != item.kurum_id
    ) {
      this.currentCardContent = [];
      console.log('make card content empty');
    } else {
      //if new item already exists in card
      if (
        this.currentCardContent.findIndex(
          (card) => card.cins_id === item.cins_id
        ) > -1
      ) {
        this.selectedItem = item;
        this.updateCard(item.adet, item.secilenTip);
      } else {
        this.currentCardContent.push(item);
        this.setSelectedKindItem(item);
        this.calculateTotal();
      }
    }
  }

  removeFromCard() {
    this.currentCardContent = this.currentCardContent.filter((item) => {
      item.cins_id != this.selectedItem.cins_id;
    });
    this.selectedItem = null;
    if (this.currentCardContent.length > 0) {
      this.calculateTotal();
    }
  }

  updateCard(newAmount: number, newType: number) {
    const index = this.currentCardContent.indexOf(this.selectedItem);
    if (index >= 0) {
      this.currentCardContent[index].adet = newAmount;
      this.currentCardContent[index].secilenTip = newType;
      this.calculateTotal();
    }
  }

  calculateTotal() {
    let total = 0;
    let deliveryFee = 0;
    this.currentCardContent.forEach((item) => {
      let withDelivery = item.fiyatlar[item.secilenTip - 1].fiyat * item.adet;
      total += withDelivery;
      deliveryFee += withDelivery - item.fiyatlar[0].fiyat * item.adet;
    });
    this.currentCardCostContent = {
      total: total,
      totalTax: (total * 8) / 100,
      totalDeliveryFee: deliveryFee,
    };
  }
}
