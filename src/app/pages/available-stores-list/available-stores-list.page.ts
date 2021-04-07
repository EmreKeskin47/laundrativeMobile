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
    this.neighborhoodId = parseInt(
      this.route.snapshot.paramMap.get('neighborhoodId')
    );
    this.route.queryParamMap.subscribe((params) => {
      this.categoryList = params.getAll('categories');
    });
    this.institutionService
      .getInstitutionsInNeighborhood(this.neighborhoodId, this.categoryList)
      .subscribe((ins) => {
        console.log(ins, 'avaşlable store list - onInıt');
      });
  }

  navigateToStore(kurum: Institution) {
    this.institutionService.setSelectedInstituion(
      kurum.institutionName,
      kurum.neighborhoodName,
      kurum.minimumOrderPrice.toString(),
      kurum.maximumServicePrice.toString(),
      kurum.institutionId.toString()
    );
    this.router.navigate(['create-order/store-menu']);
  }
}
