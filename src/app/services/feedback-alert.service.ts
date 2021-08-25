import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class FeedbackAlertService {
  constructor(public alertController: AlertController) {}

  async errorAlert(header: string) {
    const alert = await this.alertController.create({
      header: header,
      buttons: [
        {
          text: 'Anladım',
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }

  async successAlert(header: string) {
    const alert = await this.alertController.create({
      header: header,
      buttons: [
        {
          text: 'Anladım',
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }
}
