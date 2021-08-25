import { FeedbackAlertService } from './../../../services/feedback-alert.service';
import { Mesaj } from './../../../models/Mesaj';
import { MessageService } from './../../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  showMessage = false;
  subject: string = '';
  message: string = '';
  phone: string = '';
  constructor(
    private messageService: MessageService,
    private alertSrv: FeedbackAlertService
  ) {}

  ngOnInit() {}

  subjectChange(event: any) {
    this.subject = event.detail.value;
  }
  mesaageChange(event: any) {
    this.message = event.detail.value;
  }

  telChange(event: any) {
    this.phone = event.detail.value;
  }

  sendMessage() {
    this.showMessage = false;
    let mes = new Mesaj(this.subject, this.message);
    this.messageService.bizeUlasin(mes).subscribe((res) => {
      if (res.result == 'ok') {
        this.alertSrv.successAlert('Mesaj Gönderildi');
      } else {
        this.alertSrv.errorAlert('Mesaj Gönderme Hatası');
      }
    });
  }

  siziArayalim() {
    this.messageService.siziArayalim(this.phone).subscribe((res) => {
      if (res.result == 'ok') {
        this.alertSrv.successAlert('İsteğiniz Gönderildi');
      } else {
        this.alertSrv.errorAlert('İstek Gönderme Hatası');
      }
    });
  }
}
