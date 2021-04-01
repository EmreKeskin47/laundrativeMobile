import { CardCostContent } from './../models/ui/CardCostContent';
import { KindPriceItem } from './../models/KindPriceItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  currentCardContent: KindPriceItem[] = [];
  currentCardCostContent: CardCostContent = new CardCostContent(0, 0);
  selectedItem: KindPriceItem = new KindPriceItem(0, '', '', 0, 0);
  constructor() {}

  addToCard(
    kindId: number,
    kindName: string,
    kindImage: string,
    type: number,
    price: number,
    amount: number
  ) {
    let name = [...kindName];
    name[0] = amount.toString();
    let newName = name.join('');
    const newItem = new KindPriceItem(
      kindId,
      newName,
      kindImage,
      type,
      (price + (type - 1) * 5) * amount
    );
    this.currentCardContent.push(newItem);
    this.currentCardCostContent.total =
      this.currentCardCostContent.total + newItem.price;
    this.currentCardCostContent.totalTax =
      (this.currentCardCostContent.total * 8) / 100;
  }

  setSelectedKindItem(item: KindPriceItem) {
    this.selectedItem.kindId = item.kindId;
    this.selectedItem.kindImage = item.kindImage;
    this.selectedItem.kindName = item.kindName;
    this.selectedItem.price = item.price;
    this.selectedItem.type = item.type;
  }

  removeFromCard(id: number, price: number) {
    this.currentCardContent = this.currentCardContent.filter((item) => {
      item.kindId !== id;
    });
    this.currentCardCostContent.total =
      this.currentCardCostContent.total - price;
    this.currentCardCostContent.totalTax =
      (this.currentCardCostContent.total * 8) / 100;
    console.log(this.currentCardContent);
  }
}
