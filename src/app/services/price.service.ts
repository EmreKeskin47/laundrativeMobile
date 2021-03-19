import { Price } from './../../models/Price';
import { Injectable } from '@angular/core';
import { BASE_URL } from './../api/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PriceService {
  url: string = `${BASE_URL}/user/price/`;

  constructor(private http: HttpClient) {}

  getPriceById(id: bigint): Observable<Price> {
    try {
      return this.http.get<Price>(`${this.url}${id}`);
    } catch (err) {
      console.log('GET price by id', err);
    }
  }
}
