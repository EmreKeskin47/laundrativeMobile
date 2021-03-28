export class District {
  id: number;
  provinceId: number;
  districtName: string;

  constructor(id: number, provinceId: number, districtName: string) {
    this.id = id;
    this.provinceId = provinceId;
    this.districtName = districtName;
  }
}
