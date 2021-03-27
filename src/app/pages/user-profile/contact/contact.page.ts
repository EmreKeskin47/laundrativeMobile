import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  pageTitle = 'bize ulaşın';
  showMessage = false;

  constructor() {}

  messagePressed() {
    this.showMessage = !this.showMessage;
  }

  ngOnInit() {}
}
