export class Isletme {
  min_siparis_tutari: number;
  min_servis_tutari: number;
  isletme_id: number;
  calisma_saatleri: [
    {
      gun: number;
      baslangic_saati: Date;
      bitis_saati: Date;
    }
  ];
  favori: number;
  kurum_adi: string;
  kurum_id: number;

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
    kurum_adi: string,
    kurum_id: number
  ) {
    this.min_siparis_tutari = min_siparis_tutari;
    this.min_servis_tutari = min_servis_tutari;
    this.isletme_id = isletme_id;
    this.calisma_saatleri = calisma_saatleri;
    this.favori = favori;
    this.kurum_adi = kurum_adi;
    this.kurum_id = kurum_id;
  }
}
