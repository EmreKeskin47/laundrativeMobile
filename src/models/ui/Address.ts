export class Address {
  addressTitle: string;
  addressLocation: string;
  name: string;
  phone1: string;
  phone2: string;
  addressDescription: string;
  locationLink: string;

  constructor(
    addressTitle: string,
    addressLocation: string,
    name: string,
    phone1: string,
    phone2: string,
    addressDescription: string,
    locationLink: string
  ) {
    this.addressTitle = addressTitle;
    this.addressLocation = addressLocation;
    this.name = name;
    this.phone1 = phone1;
    this.phone2 = phone2;
    this.addressDescription = addressDescription;
    this.locationLink = locationLink;
  }
}
