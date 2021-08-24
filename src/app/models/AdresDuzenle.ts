export class AdresDuzenle {
  adresId: number;
  mahalleId: number;
  baslik: string;
  adres: string;
  aliciAdi: string;
  aliciTelefon: string;

  constructor(
    adresId: number,
    mahalleId: number,
    baslik: string,
    adres: string,
    aliciAdi: string,
    aliciTelefon: string
  ) {
    this.adresId = adresId;
    this.mahalleId = mahalleId;
    this.baslik = baslik;
    this.adres = adres;
    this.aliciAdi = aliciAdi;
    this.aliciTelefon = aliciTelefon;
  }
}
