import { Neighborhood } from './../models/address/Neighborhood';
import { District } from './../models/address/District';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';
import { Province } from '../models/address/province';
import { County } from '../models/address/county';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  url: string = `${BASE_URL}/address`;

  constructor(private http: HttpClient) {}

  getAllProvinces(): Observable<Province[]> {
    try {
      return this.http.get<Province[]>(`${this.url}/province`);
    } catch (err) {
      console.log('GET province err ', err);
    }
  }

  getDistrict(id: number): Observable<District[]> {
    try {
      return this.http.get<District[]>(`${this.url}/district/${id}`);
    } catch (err) {
      console.log('GET district err ', err);
    }
  }

  getCounty(id: number): Observable<County[]> {
    try {
      return this.http.get<County[]>(`${this.url}/county/${id}`);
    } catch (err) {
      console.log('GET county err ', err);
    }
  }

  getNeighborhood(id: number): Observable<Neighborhood[]> {
    try {
      return this.http.get<Neighborhood[]>(`${this.url}/neighborhood/${id}`);
    } catch (err) {
      console.log('GET neighborhood err ', err);
    }
  }
}
