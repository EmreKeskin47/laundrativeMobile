import { BildirimAyar } from './../models/BildirimAyar';
import { Mesaj } from './../models/Mesaj';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  url = `${BASE_URL}/mesaj`;
  bildirimUrl = `${BASE_URL}/musteri`;

  constructor(private http: HttpClient) {}

  bizeUlasin(mesaj: Mesaj) {
    let body = JSON.stringify(mesaj);
    try {
      return this.http.post<any>(`${this.url}/bizeUlasin`, body);
    } catch (err) {
      console.log('POST customer message err ', err);
    }
  }

  bildirimAyarları(bildirim: BildirimAyar) {
    let body = JSON.stringify(bildirim);
    try {
      return this.http.post<any>(`${this.bildirimUrl}/bildirimAyar`, body);
    } catch (err) {
      console.log('POST notification setting err ', err);
    }
  }
}
