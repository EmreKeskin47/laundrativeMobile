import { Cins } from './../models/ui/Cins';
import { CardCostContent } from './../models/ui/CardCostContent';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  currentCardContent: Cins[] = [];
  currentCardCostContent: CardCostContent = new CardCostContent(0, 0, 0);

  selectedItem: Cins;
  constructor() {}
  setSelectedKindItem(item: Cins) {
    this.selectedItem = item;
  }

  addToCard(item: Cins) {
    //if new item already exists in card
    /*if (
      this.currentCardContent.findIndex(
        (card) => card.cins_id === item.cins_id
      ) > -1
    ) {
      this.updateCard(item.amount, item.type);
    } else { */
    this.currentCardContent.push(item);
    this.setSelectedKindItem(item);
    this.calculateTotal();
  }

  /*
  removeFromCard() {
    this.currentCardContent = this.currentCardContent.filter((item) => {
      item.kindId != this.selectedItem.kindId;
    });
    this.selectedItem = null;
    if (this.currentCardContent.length > 0) {
      this.calculateTotal();
    }
  }

  updateCard(newAmount: number, newType: number) {
    const index = this.currentCardContent.indexOf(this.selectedItem);
    if (index >= 0) {
      this.currentCardContent[index].amount = newAmount;
      this.currentCardContent[index].type = newType;
      this.calculateTotal();
    }
  }
  */

  calculateTotal() {
    let total = 0;
    let deliveryFee = 0;
    this.currentCardContent.forEach((item) => {
      for (let i = 0; i < item.fiyatlar.length; i++) {
        total += item.fiyatlar[i].fiyat * item.adet;
      }
    });
    this.currentCardCostContent = {
      total: total,
      totalTax: (total * 8) / 100,
      totalDeliveryFee: deliveryFee,
    };
  }
}
