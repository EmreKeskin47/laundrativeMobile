import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musteri } from '../models/Musteri';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = `${BASE_URL}/musteri`;
  constructor(private http: HttpClient) {}

  registerUser(user: Musteri): Observable<any> {
    try {
      return this.http.post<any>(
        `${this.url}/olustur?adi=${user.adi}&telefon=${user.telefon}&email=${user.email}&sifre=${user.sifre}`,
        ''
      );
    } catch (err) {
      console.log('Register user err ', err);
    }
  }

  login(email: string, password: string) {
    const body = JSON.stringify({ email: email, password: password });
    return this.http.post(`${BASE_URL}/login`, body);
  }
}
