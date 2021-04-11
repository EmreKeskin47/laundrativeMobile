export class Semt {
  mahalleler: [
    {
      adi: string;
      id: number;
    }
  ];
  ilceAdi: string;

  constructor(mahalleler: [{ adi: string; id: number }], ilceAdi: string) {
    this.mahalleler = mahalleler;
    this.ilceAdi = ilceAdi;
  }
}
