import { Institution } from '../../models/Institution';
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
  institutionList: Institution[];

  constructor(
    private router: Router,
    private institutionService: InstitutionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('on init');
    this.institutionList = this.institutionService.currentInstitutionList;
  }

  navigateToStore(kurum: Institution) {
    this.institutionService.setSelectedInstituionCard(kurum);
    this.router.navigate(['create-order/store-menu']);
  }

  ionViewDidEnter() {
    console.log('did enter');
    this.institutionList = this.institutionService.currentInstitutionList;
  }
}
