import { Mesaj } from './../../../models/Mesaj';
import { MessageService } from './../../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  pageTitle = 'bize ulaşın';

  showMessage = false;
  subject: string = '';
  message: string = '';
  constructor(private messageService: MessageService) {}

  messagePressed() {
    this.showMessage = !this.showMessage;
  }
  subjectChange(event: any) {
    this.subject = event.detail.value;
  }
  mesaageChange(event: any) {
    this.message = event.detail.value;
  }
  sendMessage() {
    this.showMessage = false;
    let mes = new Mesaj(this.subject, this.message);
    this.messageService.bizeUlasin(mes).subscribe((res) => console.log(res));
  }

  ngOnInit() {}
}
