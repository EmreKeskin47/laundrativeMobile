export class Isletme {
  min_siparis_tutari: number;
  min_servis_tutari: number;
  isletme_id: number;
  isletme_adi: string;
  calisma_saatleri: [
    {
      gun: number;
      baslangic_saati: Date;
      bitis_saati: Date;
    }
  ];
  favori: number;

  constructor(
    min_siparis_tutari: number,
    min_servis_tutari: number,
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
    this.min_siparis_tutari = min_siparis_tutari;
    this.min_servis_tutari = min_servis_tutari;
    this.isletme_id = isletme_id;
    this.calisma_saatleri = calisma_saatleri;
    this.favori = favori;
    this.isletme_adi = isletme_adi;
  }
}
