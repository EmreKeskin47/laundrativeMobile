import { BildirimAyar } from './../../../models/BildirimAyar';
import { MessageService } from './../../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.page.html',
  styleUrls: ['./notification-settings.page.scss'],
})
export class NotificationSettingsPage implements OnInit {
  pageTitle = 'bildirim ayarları';
  mobileSelected: number = 1;
  emailSelected: number = 1;
  selectedNotifications: number[] = [0, 1, 2, 3, 4, 5, 6, 7];

  constructor(private mesaggeService: MessageService) {}

  ngOnInit() {}
  emailOption(event: any) {
    this.emailSelected == 0
      ? (this.emailSelected = 1)
      : (this.emailSelected = 0);
  }

  mobileOption(event: any) {
    this.mobileSelected == 0
      ? (this.mobileSelected = 1)
      : (this.mobileSelected = 0);
  }

  addToSelecedNotifications(value: number) {
    const index = this.selectedNotifications.indexOf(value);
    if (index > -1) {
      this.selectedNotifications.splice(index, 1);
    } else {
      this.selectedNotifications.push(value);
    }
  }

  submit() {
    let opt = new BildirimAyar(
      this.selectedNotifications,
      this.mobileSelected,
      this.emailSelected
    );
    console.log(opt);

    this.mesaggeService
      .bildirimAyarları(opt)
      .subscribe((res) => console.log(res, 'bildirim ayar output '));
  }
}
