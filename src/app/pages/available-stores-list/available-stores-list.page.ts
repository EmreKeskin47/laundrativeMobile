import { Isletme } from './../../models/İsletme';
import { InstitutionService } from './../../services/institution.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-available-stores-list',
  templateUrl: './available-stores-list.page.html',
  styleUrls: ['./available-stores-list.page.scss'],
})
export class AvailableStoresListPage implements OnInit {
  title = 'mağazalar';
  categoryList: string[];
  neighborhoodId: number;
  institutionList: Isletme[] = [];
  inslist: boolean = false;

  mahalleAdi: string = '';
  currentDay = new Date().getDay() + 1;

  constructor(
    private router: Router,
    private institutionService: InstitutionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mahalleAdi = this.route.snapshot.paramMap.get('mahalleAdi');
  }

  navigateToStore(kurum: Isletme) {
    this.institutionService.setSelectedInstituionCard(kurum);
    this.router.navigate(['create-order/store-menu']);
  }

  ionViewDidEnter() {
    if (this.institutionService.currentInstitutionList) {
      this.institutionList = this.institutionService.currentInstitutionList;
    }
  }
}
