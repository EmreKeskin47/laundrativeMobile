import { AdresDuzenle } from './../../models/ui/AdresDuzenle';
import { AddressService } from './../../services/address.service';
import { MusteriAdres } from './../../models/MusteriAdres';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.scss'],
})
export class AddressCardComponent implements OnInit {
  @Input() public addres: MusteriAdres;
  @Output() deleteSuccess = new EventEmitter<boolean>();

  adresToDisplay: MusteriAdres = null;
  user;
  editPressed = false;

  constructor(private addressService: AddressService) {}

  ngOnInit() {
    this.adresToDisplay = new MusteriAdres(
      this.addres.adresId ? this.addres.adresId : 1,
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
  }
  adresBasligi(event: any) {
    this.adresToDisplay.adresBasligi = event.detail.value;
  }
  adres(event: any) {
    this.adresToDisplay.adres = event.detail.value;
  }
  teslimAlanAdi(event: any) {
    this.adresToDisplay.teslimAlanAdi = event.detail.value;
  }
  teslimAlanTel(event: any) {
    this.adresToDisplay.teslimAlanTel = event.detail.value;
  }

  editClicked() {
    this.editPressed = !this.editPressed;
  }

  deleteClicked() {
    this.addressService.deleteAdress(this.addres.adresId).subscribe((res) => {
      if (res) {
        this.deleteSuccess.emit(true);
      }
    });
  }

  updateClicked() {
    let update = new AdresDuzenle(
      this.adresToDisplay.adresId,
      this.adresToDisplay.mahalleId,
      this.adresToDisplay.adresBasligi,
      this.adresToDisplay.adres,
      this.adresToDisplay.teslimAlanAdi,
      this.adresToDisplay.teslimAlanTel
    );
    this.addressService
      .editAddress(update)
      .subscribe((res) => console.log(res));
    this.editClicked();
  }
}
