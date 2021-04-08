export class Isletme {
  hizmetler: {
    mahalle_id: string;
    mahalle_adi: string;
    min_siparis_tutari: number;
    min_servis_tutari: number;
  };
  isletme_id: number;
  calisma_saatleri: [
    {
      gun: number;
      baslangic_saati: Date;
      bitis_saati: Date;
    }
  ];
  favori: number;
  isletme_adi: string;

  constructor(
    hizmetler: {
      mahalle_id: string;
      mahalle_adi: string;
      min_siparis_tutari: number;
      min_servis_tutari: number;
    },
    isletme_id: number,
    calisma_saatleri: [
      {
        gun: number;
        baslangic_saati: Date;
        bitis_saati: Date;
      }
    ],
    favori: number,
    isletme_adi: string
  ) {
    this.hizmetler = hizmetler;
    this.isletme_id = isletme_id;
    this.calisma_saatleri = calisma_saatleri;
    this.favori = favori;
    this.isletme_adi = isletme_adi;
  }
}
