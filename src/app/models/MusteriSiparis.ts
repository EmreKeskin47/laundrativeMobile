export class MusteriSiparis {
  siparis_id: string;
  siparis_tarihi: Date;
  status: string;
  fiyat: number;
  servis_tutari: number;
  indirim_tipi: number;
  indirim_orani: number;
  teslim_alma_zamani: Date;
  teslim_etme_zamani: Date;
  teslim_alma_adresi: string;
  teslim_etme_adresi: string;
  detaylar: [
    {
      kategori: number;
      cins: number;
      resim: string;
      adet: number;
      fiyat: number;
      tip: number;
    }
  ];

  constructor(
    siparis_id: string,
    siparis_tarihi: Date,
    status: string,
    fiyat: number,
    servis_tutari: number,
    indirim_tipi: number,
    indirim_orani: number,
    teslim_alma_zamani: Date,
    teslim_etme_zamani: Date,
    teslim_alma_adresi: string,
    teslim_etme_adresi: string,
    detaylar: [
      {
        kategori: number;
        cins: number;
        resim: string;
        adet: number;
        fiyat: number;
        tip: number;
      }
    ]
  ) {
    this.siparis_id = siparis_id;
    this.siparis_tarihi = siparis_tarihi;
    this.status = status;
    this.fiyat = fiyat;
    this.servis_tutari = servis_tutari;
    this.indirim_tipi = indirim_tipi;
    this.indirim_orani = indirim_orani;
    this.teslim_alma_zamani = teslim_alma_zamani;
    this.teslim_etme_zamani = teslim_etme_zamani;
    this.teslim_alma_adresi = teslim_alma_adresi;
    this.teslim_etme_adresi = teslim_etme_adresi;
    this.detaylar = detaylar;
  }
}
