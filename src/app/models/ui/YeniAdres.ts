export class YeniAdres {
  mahalleId: number;
  baslik: string;
  adres: string;
  aliciAdi: string;
  aliciTelefon: string;

  constructor(
    mahalleId: number,
    name: string,
    address: string,
    aliciAdi: string,
    aliciTelefon: string
  ) {
    this.mahalleId = mahalleId;
    this.baslik = name;
    this.adres = address;
    this.aliciAdi = aliciAdi;
    this.aliciTelefon = aliciTelefon;
  }
}
