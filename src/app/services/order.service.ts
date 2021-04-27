import { AuthService } from './auth.service';
import { MusteriSiparis } from './../models/MusteriSiparis';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './../api/baseUrl';
import { Cins } from './../models/ui/Cins';
import { CardCostContent } from './../models/ui/CardCostContent';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url = `${BASE_URL}/siparis`;

  currentCardContent: Cins[] = [];
  currentCardCostContent: CardCostContent = new CardCostContent(0, 0, 0);
  selectedItem: Cins;

  constructor(private http: HttpClient, private authService: AuthService) {}

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

  setSelectedKindItem(item: Cins) {
    this.selectedItem = item;
  }

  addToCard(item: Cins) {
    //if new item already exists in card
    if (
      this.currentCardContent.findIndex(
        (card) => card.cins_id === item.cins_id
      ) > -1
    ) {
      this.updateCard(item.adet, item.secilenTip);
    } else {
      this.currentCardContent.push(item);
      this.setSelectedKindItem(item);
      this.calculateTotal();
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
