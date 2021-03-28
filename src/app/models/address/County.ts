export class County {
  id: number;
  districtId: number;
  countyName: string;

  constructor(id: number, districtId: number, countyName: string) {
    this.id = id;
    this.districtId = districtId;
    this.countyName = countyName;
  }
}
