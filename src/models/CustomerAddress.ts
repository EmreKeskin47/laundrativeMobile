export class CustomerAddress {
  id: bigint;
  customer: bigint;
  address: string;
  receiving: number;
  handingOver: number;

  constructor(
    id: bigint,
    customer: bigint,
    address: string,
    receiving: number,
    handingOver: number
  ) {
    this.id = id;
    this.customer = customer;
    this.address = address;
    this.receiving = receiving;
    this.handingOver = handingOver;
  }
}
