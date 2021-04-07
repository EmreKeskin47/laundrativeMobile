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
  url: string = `${BASE_URL}/na/institution`;
  headers = { 'content-type': 'application/json' };

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

  getInstitutionsInNeighborhood(
    neighborhoodId: number,
    categories: string[]
  ): Observable<any> {
    try {
      neighborhoodId = 6;
      const date = new Date();
      categories = ['2'];
      var body = { neighborhoodId, categories, date };
      JSON.stringify(body);
      console.log(body);

      return this.http.post<any>(`${this.url}/list`, body, {
        headers: this.headers,
      });
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
