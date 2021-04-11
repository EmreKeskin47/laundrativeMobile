import { MusteriAdres } from './../../models/MusteriAdres';
import { Address } from '../../models/ui/Address';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent implements OnInit {
  @Input() public addres: MusteriAdres;

  adresToDisplay: MusteriAdres = null;

  constructor() {}

  ngOnInit() {
    this.adresToDisplay = new MusteriAdres(
      this.addres.adres ? this.addres.adres : 'adres - null',
      this.addres.adresBasligi
        ? this.addres.adresBasligi
        : 'adres başlığı - null',
      this.addres.mahalleAdi ? this.addres.mahalleAdi : 'mahalleAdi - null',
      this.addres.mahalleId ? this.addres.mahalleId : 1,
      this.addres.teslimAlanAdi
        ? this.addres.teslimAlanAdi
        : 'teslim alan isim - null',
      this.addres.teslimAlanTel ? this.addres.teslimAlanTel : 'tel - null',
      this.addres.teslimAlma,
      this.addres.teslimEtme
    );

    if (!this.addres.adresBasligi) {
      this.addres.adresBasligi = 'ev adresim - null';
    }
  }
  editClicked() {
    console.log('edit');
  }

  deleteClicked() {
    console.log('delete');
  }
}
