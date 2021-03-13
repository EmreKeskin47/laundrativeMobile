import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-stores-list',
  templateUrl: './available-stores-list.page.html',
  styleUrls: ['./available-stores-list.page.scss'],
})
export class AvailableStoresListPage implements OnInit {
  title = 'mağazalar';

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToStore() {
    this.router.navigate(['create-order/store-menu']);
  }
}
