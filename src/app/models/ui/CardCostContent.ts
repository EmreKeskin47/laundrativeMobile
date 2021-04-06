export class CardCostContent {
  total: number;
  totalTax: number;
  totalDeliveryFee: number;

  constructor(total: number, totalTax: number, totalDeliveryFee: number) {
    this.total = total;
    this.totalTax = totalTax;
    this.totalDeliveryFee = totalDeliveryFee;
  }
}
