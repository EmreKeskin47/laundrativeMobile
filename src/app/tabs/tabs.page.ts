import { SiparisService } from './../services/siparis.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  sepetSize: number;

  constructor(private siparisSrv: SiparisService) {
    this.sepetSize = this.siparisSrv.getSepetSize();
  }
}
