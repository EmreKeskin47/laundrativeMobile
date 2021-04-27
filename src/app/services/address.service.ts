import { AdresDuzenle } from './../models/ui/AdresDuzenle';
import { AuthService } from './auth.service';
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

  constructor(private http: HttpClient, private auhtService: AuthService) {}

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

  getAddressOfCustomer(): Observable<MusteriAdres[]> {
    let user = this.auhtService.getCredentials();
    try {
      return this.http.get<MusteriAdres[]>(
        `${this.customerUrl}/adresler?token=${user.token}`
      );
    } catch (err) {
      console.log('GET address of customer err ', err);
    }
  }

  createAddress(adres: YeniAdres): Observable<any> {
    let user = this.auhtService.getCredentials();
    let withToken = Object.assign(adres, { token: user.token });
    let body = JSON.stringify(withToken);
    try {
      return this.http.post<any>(`${this.customerUrl}/adresEkle`, body);
    } catch (err) {
      console.log('POST address of customer err ', err);
    }
  }

  editAddress(adres: AdresDuzenle): Observable<any> {
    let user = this.auhtService.getCredentials();
    let withToken = Object.assign(adres, { token: user.token });
    let body = JSON.stringify(withToken);
    try {
      return this.http.post<any[]>(`${this.customerUrl}/adresDuzenle`, body);
    } catch (err) {
      console.log('PUT address of customer err ', err);
    }
  }

  deleteAdress(id: number): Observable<any> {
    let user = this.auhtService.getCredentials();
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        adresId: id,
        token: user.token,
      },
    };
    try {
      return this.http.delete<any>(`${this.customerUrl}/adresSil`, options);
    } catch (err) {
      console.log('DELETE address of customer', err);
    }
  }
}
