import { CardCostContent } from './../models/ui/CardCostContent';
import { KindPriceItem } from './../models/KindPriceItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  currentCardContent: KindPriceItem[] = [];
  currentCardCostContent: CardCostContent = new CardCostContent(0, 0, 0);
  selectedItem: KindPriceItem = new KindPriceItem(0, '', '', 0, 0, null, 0);
  constructor() {}

  addToCard(item: KindPriceItem) {
    this.currentCardContent.push(item);
    this.setSelectedKindItem(item);
    this.calculateTotal();
  }

  setSelectedKindItem(item: KindPriceItem) {
    this.selectedItem = item;
  }

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

  calculatePriceWithType(amount: number, type: number, price: number): number {
    return amount * (type > 1 ? price + (type - 1) * 5 : price);
  }

  calculateTotal() {
    let total = 0;
    let deliveryFee = 0;
    this.currentCardContent.forEach((item) => {
      let withType = this.calculatePriceWithType(
        item.amount,
        item.type,
        item.price
      );
      total += withType;
      let delivery = withType - item.amount * item.price;
      deliveryFee += delivery;
    });
    this.currentCardCostContent = {
      total: total,
      totalTax: (total * 8) / 100,
      totalDeliveryFee: deliveryFee,
    };
  }
}
