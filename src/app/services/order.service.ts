import { KindPriceItem } from './../models/KindPriceItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  currentCardContent: KindPriceItem[] = [];

  constructor() {}

  addToCard(
    kindId: number,
    kindName: string,
    kindImage: string,
    type: number,
    price: number
  ) {
    console.log(type);
    const newItem = new KindPriceItem(kindId, kindName, kindImage, type, price);
    this.currentCardContent.push(newItem);
  }
}
