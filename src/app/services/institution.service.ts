import { Isletme } from './../models/İsletme';
import { WorkingHours } from '../models/eski/WorkingHours';
import { StoreCardInfo } from './../models/ui/StoreCardInfo';
import { Institution } from '../models/eski/Institution';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreItem } from '../models/eski/StoreItem';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  url: string = `${BASE_URL}/kurum`;

  currentInstitutionList: Institution[] = [];
  selectedInstitution: StoreCardInfo = new StoreCardInfo('', '', '', '', '');
  constructor(private http: HttpClient) {}

  getInstitutionsInNeighborhood(
    neighborhoodId: number,
    categories: number[],
    date: Date,
    hour: Date,
    customerId: number
  ): Observable<Isletme> {
    try {
      return this.http.get<Isletme>(
        `${
          this.url
        }/liste?musteriId=${customerId}&mahalleId=${neighborhoodId}&tarih=${date.toLocaleDateString()}%20${hour.toLocaleTimeString(
          'en-GB'
        )}&kategoriler=${categories}`
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

  setSelectedInstituionCard(store: Institution) {
    this.selectedInstitution = new StoreCardInfo(
      store.institutionName,
      store.neighborhoodName,
      store.minimumOrderPrice.toString(),
      store.maximumServicePrice.toString(),
      store.institutionId.toString()
    );
  }
}
