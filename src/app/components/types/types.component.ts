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
  @Input() public cardSize: number;

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
    this.type.emit(this.selectedType);
    this.totalCost = this.totalCost + 5 * (this.selectedType - 1);
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
