import { Semt } from './../models/Semt';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';
import { MusteriAdres } from '../models/MusteriAdres';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  url: string = `${BASE_URL}/adres`;
  customerUrl: string = `${BASE_URL}/musteri/adresler`;

  constructor(private http: HttpClient) {}

  getAllProvinces(): Observable<any> {
    try {
      return this.http.get<any>(`${this.url}/il`);
    } catch (err) {
      console.log('GET province err ', err);
    }
  }

  getDistrict(id: number): Observable<Semt[]> {
    try {
      return this.http.get<Semt[]>(`${this.url}/mahalle?ilId=${id}`);
    } catch (err) {
      console.log('GET district err ', err);
    }
  }

  getAddressOfCustomer(id: number): Observable<MusteriAdres[]> {
    try {
      return this.http.get<MusteriAdres[]>(`${this.customerUrl}?id=${id}`);
    } catch (err) {
      console.log('GET address of customer err ', err);
    }
  }
}
