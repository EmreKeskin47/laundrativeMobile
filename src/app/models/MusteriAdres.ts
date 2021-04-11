export class MusteriAdres {
  adres: string;
  adresBasligi: string;
  mahalleAdi: string;
  mahalleId: number;
  teslimAlanAdi: string;
  teslimAlanTel: string;
  teslimAlma: number;
  teslimEtme: number;

  constructor(
    adres: string,
    adresBasligi: string,
    mahalleAdi: string,
    mahalleId: number,
    teslimAlanAdi: string,
    teslimAlanTel: string,
    teslimAlma: number,
    teslimEtme: number
  ) {
    this.adres = adres;
    this.adresBasligi = adresBasligi;
    this.mahalleAdi = mahalleAdi;
    this.mahalleId = mahalleId;
    this.teslimAlanAdi = teslimAlanAdi;
    this.teslimAlanTel = teslimAlanTel;
    this.teslimAlma = teslimAlma;
    this.teslimEtme = teslimEtme;
  }
}
