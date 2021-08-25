import { AuthService } from './auth.service';
import { BildirimAyar } from './../models/BildirimAyar';
import { Mesaj } from './../models/Mesaj';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  url = `${BASE_URL}/mesaj`;
  bildirimUrl = `${BASE_URL}/musteri`;

  httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Cache-Control', 'no-cache')
    .set('Authorization', `Bearer ${this.authService.getCredentials().token}`);
  options = { headers: this.httpHeaders, withCredentials: true };

  constructor(private http: HttpClient, private authService: AuthService) {}

  bizeUlasin(mesaj: Mesaj) {
    try {
      return this.http.post<any>(`${this.url}/bizeUlasin`, mesaj, this.options);
    } catch (err) {
      console.log('POST customer message err ', err);
    }
  }

  siziArayalim(tel: string) {
    try {
      return this.http.post<any>(`${this.url}/siziArayalim`, tel, this.options);
    } catch (err) {
      console.log('POST sizi arayalım err ', err);
    }
  }

  bildirimAyarları(bildirim: BildirimAyar) {
    try {
      return this.http.post<any>(
        `${this.bildirimUrl}/bildirimAyar`,
        bildirim,
        this.options
      );
    } catch (err) {
      console.log('POST notification setting err ', err);
    }
  }
}
