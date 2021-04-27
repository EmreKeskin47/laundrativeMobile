import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent implements OnInit {
  @Input() public itemCost;
  @Input() public totalCost;
  @Input() public item;
  @Input() public standard;
  @Input() public premium;
  @Input() public express;

  @Output() cancelled = new EventEmitter<boolean>();
  @Output() type = new EventEmitter<number>();
  @Output() amount = new EventEmitter<number>();

  expressCost: number;
  premiumCost: number;
  selectedType: number;

  constructor(public alertController: AlertController) {}
  ngOnInit() {
    this.selectedType = this.item.secilenTip;
    if (this.item.fiyatlar.length >= 2) {
      this.expressCost = this.item.fiyatlar[1].fiyat;
      this.premiumCost = this.item.fiyatlar[2].fiyat;
    }
    this.calculateTotalCost();
  }

  plus() {
    this.item.adet++;
    this.calculateTotalCost();
    this.amount.emit(this.item.adet);
  }

  minus() {
    this.item.adet--;
    this.calculateTotalCost();
    this.amount.emit(this.item.adet);
  }

  selectType(selectedTypeId: number) {
    this.selectedType = selectedTypeId;
    this.type.emit(this.selectedType);
    this.calculateTotalCost();
  }

  calculateTotalCost() {
    this.totalCost =
      this.item.adet * this.item.fiyatlar[this.item.secilenTip - 1].fiyat;
  }

  removeFromCard = async () => {
    const alert = await this.alertController.create({
      header: 'Sepetten çıkarmak istediğinize emin misiniz?',
      buttons: [
        'Hayır',
        {
          text: 'Evet',
          handler: () => {
            this.cancelled.emit(true);
          },
        },
      ],
    });

    await alert.present();
  };
}
