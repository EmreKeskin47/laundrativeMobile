import { KategoriCins } from './../models/KategoriCins';
import { Isletme } from './../models/İsletme';
import { WorkingHours } from '../models/eski/WorkingHours';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  url: string = `${BASE_URL}/kurum`;

  currentInstitutionList: Isletme[];
  selectedInstitution: Isletme = null;
  locationOfSelected: string;

  constructor(private http: HttpClient) {}

  getInstitutionsInNeighborhood(
    neighborhoodId: number,
    categories: number[],
    date: Date,
    hour: Date,
    customerId: number
  ): Observable<Isletme[]> {
    try {
      return this.http.get<Isletme[]>(
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

  getItemsInInstitution(storeID: number): Observable<KategoriCins[]> {
    try {
      return this.http.get<KategoriCins[]>(
        `${this.url}/sorgu?kurumId=${storeID}`
      );
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

  detailedSearch(
    neighborhoodId: number,
    date: Date,
    hour: Date,
    deliveryDate: Date,
    deliveryHour: Date,
    customerId: number,
    freeDelivery: boolean
  ): Observable<Isletme[]> {
    try {
      // return this.http.get<any>(
      //     `${
      //       this.url
      //     }/detaylıArama?mahalleId=${neighborhoodId}&teslimAlmaZaman=${date.toLocaleDateString()}%20${hour.toLocaleTimeString(
      //       'en-GB'
      //     )}&teslimEtmeZaman=${deliveryDate.toLocaleDateString()}%20${deliveryHour.toLocaleTimeString(
      //       'en-GB'
      //     )}&kategoriCinslerParam=3:4,5:6&musteriId=${customerId}&ucretsizTeslimat=${freeDelivery}`
      //   );
      return this.http.get<Isletme[]>(
        `${this.url}/detayliArama?mahalleId=3&teslimAlmaZaman=1/1/2010%2013:00&teslimEtmeZaman=1/1/2011%2014:00&kategoriCinslerParam=3:4,5:6&musteriId=1&ucretsizTeslimat=true`
      );
    } catch (err) {
      console.log('Error in GET detailed store search', err);
    }
  }

  setSelectedInstituionCard(store: Isletme, location: string) {
    this.selectedInstitution = store;
    this.locationOfSelected = location;
  }
}
