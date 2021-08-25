import { AdresDuzenle } from '../models/AdresDuzenle';
import { AuthService } from './auth.service';
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

  httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Cache-Control', 'no-cache')
    .set('Authorization', `Bearer ${this.authService.getCredentials().token}`);
  options = { headers: this.httpHeaders, withCredentials: true };

  constructor(private http: HttpClient, private authService: AuthService) {}

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
    try {
      return this.http.get<MusteriAdres[]>(
        `${this.customerUrl}/adresler`,
        this.options
      );
    } catch (err) {
      console.log('GET address of customer err ', err);
    }
  }

  createAddress(
    mahalleId: number,
    baslik: string,
    adres: string,
    aliciAdi: string,
    aliciTelefon: string
  ): Observable<any> {
    try {
      return this.http.post<any>(
        `${this.customerUrl}/adresEkle`,
        {
          mahalleId,
          baslik,
          adres,
          gecerliAdres: 1,
          aliciAdi,
          aliciTelefon,
        },
        this.options
      );
    } catch (err) {
      console.log('POST address of customer err ', err);
    }
  }

  editAddress(adres: AdresDuzenle): Observable<any> {
    try {
      return this.http.post<any[]>(
        `${this.customerUrl}/adresDuzenle`,
        adres,
        this.options
      );
    } catch (err) {
      console.log('PUT address of customer err ', err);
    }
  }

  deleteAdress(id: number): Observable<any> {
    try {
      return this.http.delete<any>(
        `${this.customerUrl}/adresSil`,
        this.options
      );
    } catch (err) {
      console.log('DELETE address of customer', err);
    }
  }
}
