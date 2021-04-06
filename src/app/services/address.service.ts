import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  url: string = `${BASE_URL}/na/address`;

  constructor(private http: HttpClient) {}

  getAllProvinces(): Observable<any> {
    try {
      return this.http.get<any>(`${this.url}/province`);
    } catch (err) {
      console.log('GET province err ', err);
    }
  }

  getDistrict(id: number): Observable<any> {
    try {
      return this.http.get<any>(`${this.url}/${id}`);
    } catch (err) {
      console.log('GET district err ', err);
    }
  }
}
