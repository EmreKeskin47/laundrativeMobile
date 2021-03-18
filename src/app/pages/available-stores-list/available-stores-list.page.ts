import { Institution } from './../../../models/Institution';
import { InstitutionService } from './../../services/institution.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-stores-list',
  templateUrl: './available-stores-list.page.html',
  styleUrls: ['./available-stores-list.page.scss'],
})
export class AvailableStoresListPage implements OnInit {
  title = 'mağazalar';
  institutionList: Institution[];

  constructor(
    private router: Router,
    private institutionService: InstitutionService
  ) {}

  ngOnInit(): void {
    this.institutionService.getAllInstitutions().subscribe((kurum) => {
      this.institutionList;
    });
  }

  navigateToStore() {
    this.router.navigate(['create-order/store-menu']);
  }
}
