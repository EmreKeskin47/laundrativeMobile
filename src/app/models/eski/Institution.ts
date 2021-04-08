export class Institution {
  neighborhoodId: number;
  neighborhoodName: string;
  workingHours: {
    startingTime: string;
    endingTime: string;
  };
  institutionName: string;
  institutionId: number;
  minimumOrderPrice: number;
  maximumServicePrice: number;
  freeServicePrice: number;
  isFavorite: boolean;

  constructor(
    neighborhoodId: number,
    neighborhoodName: string,
    workingHours: {
      startingTime: string;
      endingTime: string;
    },
    institutionName: string,
    institutionId: number,
    minimumOrderPrice: number,
    maximumServicePrice: number,
    freeServicePrice: number,
    isFavorite: boolean
  ) {
    this.neighborhoodId = neighborhoodId;
    this.neighborhoodName = neighborhoodName;
    this.workingHours = workingHours;
    this.institutionName = institutionName;
    this.institutionId = institutionId;
    this.minimumOrderPrice = minimumOrderPrice;
    this.maximumServicePrice = maximumServicePrice;
    this.freeServicePrice = freeServicePrice;
    this.isFavorite = isFavorite;
  }
}
