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
  @Input() public initialtype;
  @Input() public cardSize;
  @Input() public standard;
  @Input() public premium;
  @Input() public express;

  selectedType: number;
  @Output() cancelled = new EventEmitter<boolean>();
  @Output() type = new EventEmitter<number>();
  @Output() amount = new EventEmitter<number>();

  constructor(public alertController: AlertController) {}
  ngOnInit() {
    if (this.initialtype) {
      this.selectedType = this.initialtype;
    } else {
      this.selectedType = 1;
    }
    this.calculateTotalCost();
  }

  plus() {
    this.cardSize = this.cardSize + 1;
    this.calculateTotalCost();
    this.amount.emit(this.cardSize);
  }

  minus() {
    this.cardSize--;
    this.calculateTotalCost();
    this.amount.emit(this.cardSize);
  }

  selectType(selectedTypeId: number) {
    this.selectedType = selectedTypeId;
    this.type.emit(this.selectedType);
    this.calculateTotalCost();
  }

  calculateTotalCost() {
    this.totalCost =
      this.cardSize * (this.itemCost + 5 * (this.selectedType - 1));
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
