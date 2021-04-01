export class StoreCardInfo {
  storeName: string;
  location: string;
  minFee: string;
  discountFee: string;
  storeID: string;

  constructor(
    storeName: string,
    location: string,
    minFee: string,
    discountFee: string,
    storeID: string
  ) {
    this.storeName = storeName;
    this.location = location;
    this.minFee = minFee;
    this.discountFee = discountFee;
    this.storeID = storeID;
  }
}
