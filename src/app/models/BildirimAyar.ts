export class BildirimAyar {
  ids: number[];
  mobil_bildirim: number;
  email_bildirim: number;

  constructor(ids: number[], mobil_bildirim: number, email_bildirim: number) {
    this.ids = ids;
    this.mobil_bildirim = mobil_bildirim;
    this.email_bildirim = email_bildirim;
  }
}
