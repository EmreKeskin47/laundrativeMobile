export class WorkingHours {
  day: string;
  startingTime: string;
  endingTime: string;

  constructor(day: string, startingTime: string, endingTime: string) {
    this.day = day;
    this.startingTime = startingTime;
    this.endingTime = endingTime;
  }
}
