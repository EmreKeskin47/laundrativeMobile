import { IsletmeService } from './../../services/isletme.service';
import { Isletme } from './../../models/İsletme';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magaza-secim',
  templateUrl: './magaza-secim.page.html',
  styleUrls: ['./magaza-secim.page.scss'],
})
export class MagazaSecimPage implements OnInit {
  selectedType: number = 1;
  isletmeList: Isletme[] = [];

  constructor(private router: Router, private isletmeSrv: IsletmeService) {}

  ngOnInit() {
    this.isletmeSrv.getInstitutionsInNeighborhood().subscribe((res) => {
      console.log(res);
      this.isletmeList = res;
    });
  }

  selectType(selectedTypeId: number) {
    this.selectedType = selectedTypeId;
  }

  selectStore() {
    this.router.navigate(['yeni-siparis/sepet']);
  }
}
