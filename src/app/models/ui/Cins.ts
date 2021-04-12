export class Cins {
  cins_resmi: string;
  cins_id: number;
  cins_adi: string;
  fiyatlar: [
    {
      fiyat: number;
      tip: number;
    }
  ];
  adet: number;
  teslimatTarihi: Date;
  secilenTip: number;

  constructor(
    cins_resmi: string,
    cins_id: number,
    cins_adi: string,
    fiyatlar: [
      {
        fiyat: number;
        tip: number;
      }
    ],
    teslimatTarihi: Date
  ) {
    this.cins_resmi = cins_resmi;
    this.cins_id = cins_id;
    this.cins_adi = cins_adi;
    this.fiyatlar = fiyatlar;
    this.adet = 0;
    this.teslimatTarihi = teslimatTarihi;
    this.secilenTip = 1;
  }
}
