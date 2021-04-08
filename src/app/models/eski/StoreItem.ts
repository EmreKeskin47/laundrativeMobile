export class StoreItem {
  categoryId: number;
  kindPriceList: [
    {
      kindId: number;
      kindName: string;
      kindImage: string;
      type: number;
      price: number;
    }
  ];
  constructor(
    categoryId: number,
    kindPriceList: [
      {
        kindId: number;
        kindName: string;
        kindImage: string;
        type: number;
        price: number;
      }
    ]
  ) {
    this.categoryId = categoryId;
    this.kindPriceList = kindPriceList;
  }
}
