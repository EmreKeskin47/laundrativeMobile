import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magaza-secim',
  templateUrl: './magaza-secim.page.html',
  styleUrls: ['./magaza-secim.page.scss'],
})
export class MagazaSecimPage implements OnInit {
  selectedType: number = 1;

  constructor(private router: Router) {}

  ngOnInit() {}

  selectType(selectedTypeId: number) {
    this.selectedType = selectedTypeId;
  }

  selectStore() {
    this.router.navigate(['yeni-siparis/sepet']);
  }
}
