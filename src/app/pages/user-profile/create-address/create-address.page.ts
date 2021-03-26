import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.page.html',
  styleUrls: ['./create-address.page.scss'],
})
export class CreateAddressPage implements OnInit {
  pageTitle = 'yeni adres oluştur';
  ports: Port[];
  port: Port;
  anotherUser = false;

  constructor(private router: Router) {
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' },
    ];
  }

  portChange(event: { component: IonicSelectableComponent; value: any }) {
    console.log('port:', event.value);
  }

  onChange() {
    this.anotherUser = !this.anotherUser;
  }

  navigateToAddressList() {
    this.router.navigate(['/profile/add-address-result']);
  }

  ngOnInit() {}
}
