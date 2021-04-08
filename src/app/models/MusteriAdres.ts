export class MusteriAdres {
  mahalleId: number;
  teslimAlma: number;
  teslimEtme: number;
  adres: string;
  teslimAlanTel: string;
  adresBasligi: string;

  constructor(
    mahalleId: number,
    teslimAlma: number,
    teslimEtme: number,
    adres: string,
    teslimAlanTel: string,
    adresBasligi: string
  ) {
    this.mahalleId = mahalleId;
    this.teslimAlma = teslimAlma;
    this.teslimEtme = teslimEtme;
    this.adres = adres;
    this.teslimAlanTel = teslimAlanTel;
    this.adresBasligi = adresBasligi;
  }
}
