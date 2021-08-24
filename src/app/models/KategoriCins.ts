export class KategoriCins {
  kategoriId: number;
  hizmetler: [
    {
      hizmet_resmi: string;
      hizmet_id: number;
      hizmet_adi: string;
      fiyatlar: [
        {
          fiyat: number;
          tip: number;
        }
      ];
    }
  ];
  constructor(
    kategoriId: number,
    hizmetler: [
      {
        hizmet_resmi: string;
        hizmet_id: number;
        hizmet_adi: string;
        fiyatlar: [
          {
            fiyat: number;
            tip: number;
          }
        ];
      }
    ]
  ) {
    this.kategoriId = kategoriId;
    this.hizmetler = hizmetler;
  }
}
