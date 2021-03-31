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
    this.route.snapshot.paramMap.get('neighborhoodId');
    this.route.queryParamMap.subscribe(
      (params) => (this.categoryList = params.getAll('categories'))
    );
    this.institutionService
      .getInstitutionsInNeighborhood(this.neighborhoodId, this.categoryList)
      .subscribe((ins) => (this.institutionList = ins));
  }

  navigateToStore(kurum: Institution) {
    this.router.navigate([
      'create-order/store-menu',
      {
        storeName: kurum.institutionName,
        storeLocation: kurum.neighborhoodName,
        minFee: kurum.minimumOrderPrice,
        freeDeliver: kurum.maximumServicePrice,
        id: kurum.institutionId,
      },
    ]);
  }
}
