export class Hizmet {
  kurum_id: number;
  kategori_id: number;
  hizmet_resmi: any;
  hizmet_id: number;
  hizmet_adi: string;
  fiyatlar: [
    {
      fiyat: number;
      tip: number;
    }
  ];
  teslimatTarihi: Date;
  adet: number;
  secilenTip: number;

  constructor(
    kurum_id: number,
    kategori_id,
    hizmet_resmi: any,
    hizmet_id: number,
    hizmet_adi: string,
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
    this.hizmet_resmi = hizmet_resmi;
    this.hizmet_id = hizmet_id;
    this.hizmet_adi = hizmet_adi;
    this.fiyatlar = fiyatlar;
    this.teslimatTarihi = teslimatTarihi;
    adet ? (this.adet = adet) : (this.adet = 0);
    secilenTip ? (this.secilenTip = secilenTip) : (this.secilenTip = 1);
  }
}
