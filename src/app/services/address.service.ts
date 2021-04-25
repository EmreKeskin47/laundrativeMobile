import { YeniAdres } from './../models/ui/YeniAdres';
import { Semt } from './../models/Semt';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';
import { MusteriAdres } from '../models/MusteriAdres';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  url: string = `${BASE_URL}/adres`;
  customerUrl: string = `${BASE_URL}/musteri`;

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

  getAddressOfCustomer(token: string): Observable<MusteriAdres[]> {
    try {
      return this.http.get<MusteriAdres[]>(
        `${this.customerUrl}/adresler?token=${token}`
      );
    } catch (err) {
      console.log('GET address of customer err ', err);
    }
  }

  createAddress(adres: YeniAdres): Observable<any> {
    let body = JSON.stringify(adres);
    try {
      return this.http.post<any[]>(`${this.customerUrl}/adresEkle`, body);
    } catch (err) {
      console.log('POST address of customer err ', err);
    }
  }

  editAddress(adres: YeniAdres): Observable<any> {
    let body = JSON.stringify(adres);
    try {
      return this.http.post<any[]>(`${this.customerUrl}/adresDuzenle`, body);
    } catch (err) {
      console.log('PUT address of customer err ', err);
    }
  }

  deleteAdress(token: string, id: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id,
        token: token,
      },
    };

    try {
      return this.http.delete<any>(`${this.customerUrl}/adresSil`, options);
    } catch (err) {
      console.log('DELETE address of customer', err);
    }
  }
}
