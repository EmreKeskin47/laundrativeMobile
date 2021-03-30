import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent implements OnInit {
  @Input() itemCost;
  @Input() totalCost;
  @Input() cardSize: number;
  selectedType = 1;
  @Output() cancelled = new EventEmitter<boolean>();
  @Output() type = new EventEmitter<number>();

  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  plus() {
    this.cardSize = this.cardSize + 1;
    this.totalCost = this.totalCost + this.itemCost;
  }

  minus() {
    this.cardSize--;
    this.totalCost = this.totalCost - this.itemCost;
  }

  selectType(selectedTypeId: number) {
    this.selectedType = selectedTypeId;
    this.totalCost = this.totalCost + 5 * (this.selectedType - 1);
    this.type.emit(this.selectedType);
  }

  removeFromCard = async () => {
    const alert = await this.alertController.create({
      header: 'Emin misin?',
      message:
        'Do you agree to use this lightsaber to do good across the galaxy?',
      buttons: [
        'Disagree',
        {
          text: 'Agree',
          handler: () => {
            this.cancelled.emit(true);
          },
        },
      ],
    });

    await alert.present();
  };
}
