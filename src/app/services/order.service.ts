import { CardItem } from './../models/ui/CardItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  currentCardContent: CardItem[] = [];

  constructor() {}

  addToCard(
    id: number,
    itemName: string,
    itemCost: number,
    type: number,
    deliveryDate: string,
    itemIcon: string
  ) {
    const newItem = new CardItem(
      id,
      itemName,
      itemCost,
      type,
      deliveryDate,
      itemIcon
    );
    this.currentCardContent.push(newItem);
  }
}
