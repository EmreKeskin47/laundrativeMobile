export class Order {
  id: bigint;
  customer: bigint;
  orderDate: Date;
  orderLocation: number;
  total: bigint;
  cash: bigint;
  pos: bigint;
  notes: string;
  discountType: number;
  receivingDate: Date;
  receivingAddress: string;
  deliveryDate: Date;
  deliveryAddress: string;
  deliveryStatus: number;
  paymentStatus: number;

  constructor(
    id: bigint,
    customer: bigint,
    orderDate: Date,
    orderLocation: number,
    total: bigint,
    cash: bigint,
    pos: bigint,
    notes: string,
    discountType: number,
    receivingDate: Date,
    receivingAddress: string,
    deliveryDate: Date,
    deliveryAddress: string,
    deliveryStatus: number,
    paymentStatus: number
  ) {
    this.id = id;
    this.customer = customer;
    this.orderDate = orderDate;
    this.orderLocation = orderLocation;
    this.total = total;
    this.cash = cash;
    this.pos = pos;
    this.notes = notes;
    this.discountType = discountType;
    this.receivingDate = receivingDate;
    this.receivingAddress = receivingAddress;
    this.deliveryDate = deliveryDate;
    this.deliveryAddress = deliveryAddress;
    this.deliveryStatus = deliveryStatus;
    this.paymentStatus = paymentStatus;
  }
}
