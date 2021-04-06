import { WorkingHours } from './../models/WorkingHours';
import { StoreCardInfo } from './../models/ui/StoreCardInfo';
import { Institution } from '../models/Institution';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreItem } from '../models/StoreItem';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  url: string = `${BASE_URL}/institution`;
  currentInstitutionList: Institution[] = [];
  selectedInstitution: StoreCardInfo = new StoreCardInfo('', '', '', '', '');
  constructor(private http: HttpClient) {}

  //Get institutions
  getAllInstitutions(): Observable<Institution[]> {
    try {
      return this.http.get<Institution[]>(this.url);
    } catch (err) {
      console.log('GET institution err ', err);
    }
  }

  //Make dynamic
  getInstitutionsInNeighborhood(
    neighborhoodId: number,
    categories: string[]
  ): Observable<Institution[]> {
    try {
      const date = new Date();
      return this.http.get<Institution[]>(
        `${this.url}/?neighborhoodId=3&categories=7&date=2021-03-29T17:45:00`
      );
    } catch (err) {
      console.log('GET ins by neighborhood id ', err);
    }
  }

  getItemsInInstitution(storeID: string): Observable<StoreItem[]> {
    try {
      return this.http.get<StoreItem[]>(`${this.url}/${storeID}`);
    } catch (err) {
      console.log('Error in GET store content by id', err);
    }
  }

  getWorkingHours(storeID: string): Observable<WorkingHours[]> {
    try {
      return this.http.get<WorkingHours[]>(`${this.url}/hours/${storeID}`);
    } catch (err) {
      console.log('Error GET store working hours', err);
    }
  }

  setSelectedInstituion(
    storeName: string,
    location: string,
    minFee: string,
    discountFee: string,
    storeID: string
  ) {
    this.selectedInstitution.storeName = storeName;
    this.selectedInstitution.location = location;
    this.selectedInstitution.minFee = minFee;
    this.selectedInstitution.discountFee = discountFee;
    this.selectedInstitution.storeID = storeID;
  }
}
