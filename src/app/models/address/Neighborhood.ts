export class Neighborhood {
  id: number;
  countyId: number;
  neighborhoodName: string;
  postalCode: number;

  constructor(
    id: number,
    countyId: number,
    neighborhoodName: string,
    postalCode: number
  ) {
    this.id = id;
    this.countyId = countyId;
    this.neighborhoodName = neighborhoodName;
    this.postalCode = postalCode;
  }
}
