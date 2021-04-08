export class District {
  districtName: string;
  neighborhoodId: number;
  neighborhoodName: string;
  listName: string;

  constructor(
    districtName: string,
    neighborhoodId: number,
    neighborhoodName: string,
    listName: string
  ) {
    this.districtName = districtName;
    this.neighborhoodId = neighborhoodId;
    this.neighborhoodName = neighborhoodName;
    this.listName = listName;
  }
}
