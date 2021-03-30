export class CardItem {
  id: number;
  itemName: string;
  itemCost: number;
  type: number;
  deliveryDate: string;
  itemIcon: string;

  constructor(
    id: number,
    itemName: string,
    itemCost: number,
    type: number,
    deliveryDate: string,
    itemIcon: string
  ) {
    this.id = id;
    this.itemName = itemName;
    this.itemCost = itemCost;
    this.type = type;
    this.deliveryDate = deliveryDate;
    this.itemIcon = itemIcon;
  }
}
