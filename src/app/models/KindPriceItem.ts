export class KindPriceItem {
  kindId: number;
  kindName: string;
  kindImage: string;
  type: number;
  price: number;
  deliveryDate: Date;
  amount: number;

  constructor(
    kindId: number,
    kindName: string,
    kindImage: string,
    type: number,
    price: number,
    deliveryDate: Date,
    amount: number
  ) {
    this.kindId = kindId;
    this.kindImage = kindImage;
    this.kindName = kindName;
    this.type = type;
    this.price = price;
    this.deliveryDate = deliveryDate;
    this.amount = amount;
  }
}
