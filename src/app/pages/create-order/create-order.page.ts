import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
interface Address {
  id: number;
  first: string;
}

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage {
  title = 'mağaza arayın';
  image =
    'https://media.istockphoto.com/photos/colorful-clothes-in-laundry-basket-blue-indigo-purple-picture-id119623848?k=6&m=119623848&s=612x612&w=0&h=g8_MG32-0cSlkH4RjBHzMiyH_gGPPg9rObdK-i-FUNk=';
  addressList: Address[] = [
    {
      id: 1,
      first: 'Address1',
    },
    {
      id: 2,
      first: 'Address2',
    },
    {
      id: 3,
      first: 'Address3',
    },
  ];
  constructor(private router: Router) {}

  navigateToStoreList() {
    this.router.navigate(['/create-order/available-stores-list']);
  }
  navigateToDetailedSearch() {
    this.router.navigate(['/create-order//detailed-search']);
  }
}
