export class YeniAdres {
  token: string;
  neighborhoodId: number;
  name: string;
  address: string;
  receiverName: string;
  receiverPhone: string;

  constructor(
    token: string,
    neighborhoodId: number,
    name: string,
    address: string,
    receiverName: string,
    receiverPhone: string
  ) {
    this.token = token;
    this.neighborhoodId = neighborhoodId;
    this.name = name;
    this.address = address;
    this.receiverName = receiverName;
    this.receiverPhone = receiverPhone;
  }
}
