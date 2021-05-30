export class Cins {
  kurum_id: number;
  kategori_id: number;
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
    kurum_id: number,
    kategori_id,
    cins_resmi: string,
    cins_id: number,
    cins_adi: string,
    fiyatlar: [
      {
        fiyat: number;
        tip: number;
      }
    ],
    teslimatTarihi: Date,
    adet?: number,
    secilenTip?: number
  ) {
    this.kurum_id = kurum_id;
    this.kategori_id = kategori_id;
    this.cins_resmi = cins_resmi;
    this.cins_id = cins_id;
    this.cins_adi = cins_adi;
    this.fiyatlar = fiyatlar;
    adet ? (this.adet = adet) : (this.adet = 0);
    this.teslimatTarihi = teslimatTarihi;
    secilenTip ? secilenTip : (this.secilenTip = 1);
  }
}
