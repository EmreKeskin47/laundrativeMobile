export class SemtListe {
  mahalleAdi: string;
  mahalleId: number;
  ilceAdi: string;
  listeAdi: string;

  constructor(mahalleAdi: string, mahalleId: number, ilceAdi: string) {
    this.mahalleAdi = mahalleAdi;
    this.mahalleId = mahalleId;
    this.ilceAdi = ilceAdi;
    this.listeAdi = mahalleAdi + ' (' + this.ilceAdi + ') ';
  }
}
