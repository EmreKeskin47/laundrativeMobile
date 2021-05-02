export class OrderContent {
  kategoriId: number;
  cins: number;
  tip: number;
  kurumId: number;
  adet: number;
  fiyat: number;
  tarih: Date;

  constructor(
    kategoriId: number,
    cins: number,
    tip: number,
    kurumId: number,
    adet: number,
    fiyat: number,
    tarih: Date
  ) {
    this.kategoriId = kategoriId;
    this.cins = cins;
    this.tip = tip;
    this.kurumId = kurumId;
    this.adet = adet;
    this.fiyat = fiyat;
    this.tarih = tarih;
  }
}
