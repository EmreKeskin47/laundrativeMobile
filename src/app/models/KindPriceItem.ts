export class KindPriceItem {
  kindId: number;
  kindName: string;
  kindImage: string;
  type: number;
  price: number;

  constructor(
    kindId: number,
    kindName: string,
    kindImage: string,
    type: number,
    price: number
  ) {
    this.kindId = kindId;
    this.kindImage = kindImage;
    this.kindName = kindName;
    this.type = type;
    this.price = price;
  }
}
