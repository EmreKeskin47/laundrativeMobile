import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-search',
  templateUrl: './detailed-search.page.html',
  styleUrls: ['./detailed-search.page.scss'],
})
export class DetailedSearchPage implements OnInit {
  pageTitle = 'detaylı arama';

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToStoreList() {
    this.router.navigate(['/create-order/available-stores-list']);
  }
}
