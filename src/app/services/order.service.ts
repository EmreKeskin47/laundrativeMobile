import { CardCostContent } from './../models/ui/CardCostContent';
import { KindPriceItem } from './../models/KindPriceItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  currentCardContent: KindPriceItem[] = [];
  currentCardCostContent: CardCostContent = new CardCostContent(0, 0);
  constructor() {}

  addToCard(
    kindId: number,
    kindName: string,
    kindImage: string,
    type: number,
    price: number
  ) {
    const newItem = new KindPriceItem(
      kindId,
      kindName,
      kindImage,
      type,
      price + (type - 1) * 5
    );
    this.currentCardContent.push(newItem);
    this.currentCardCostContent.total =
      this.currentCardCostContent.total + newItem.price;
    this.currentCardCostContent.totalTax =
      (this.currentCardCostContent.total * 8) / 100;
  }
}
