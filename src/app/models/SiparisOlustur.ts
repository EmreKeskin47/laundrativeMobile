import { OrderContent } from './ui/OrderContent';
export class SiparisOlustur {
  eskiSiparisNo: string;
  teslimAlmaAdres: string;
  teslimEtmeAdres: string;
  teslimAlmaZamani: Date;
  not: string;
  indirimMiktari: string;
  indirimTipi: string;
  toplam: string;
  siparisler: OrderContent[];
  constructor(
    eskiSiparisNo: string,
    teslimAlmaAdres: string,
    teslimEtmeAdres: string,
    teslimAlmaZamani: Date,
    not: string,
    indirimMiktari: string,
    indirimTipi: string,
    toplam: string,
    siparisler: OrderContent[]
  ) {
    this.eskiSiparisNo = eskiSiparisNo;
    this.teslimAlmaAdres = teslimAlmaAdres;
    this.teslimEtmeAdres = teslimEtmeAdres;
    this.teslimAlmaZamani = teslimAlmaZamani;
    this.not = not;
    this.indirimMiktari = indirimMiktari;
    this.indirimTipi = indirimTipi;
    this.toplam = toplam;
    this.siparisler = siparisler;
  }
}
