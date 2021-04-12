export class KategoriCins {
  kategoriId: number;
  cinsler: [
    {
      cins_resmi: string;
      cins_id: number;
      cins_adi: string;
      fiyat: [
        {
          fiyat: number;
          tip: number;
        }
      ];
    }
  ];
  constructor(
    kategoriId: number,
    cinsler: [
      {
        cins_resmi: string;
        cins_id: number;
        cins_adi: string;
        fiyat: [
          {
            fiyat: number;
            tip: number;
          }
        ];
      }
    ]
  ) {
    this.kategoriId = kategoriId;
    this.cinsler = cinsler;
  }
}
