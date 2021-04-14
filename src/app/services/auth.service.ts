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
  url2: string = `${BASE_URL}/kullanici`;
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

  login(email: string, password: string): Observable<any> {
    return this.http.get(`${this.url2}/giris?email=${email}&sifre=${password}`);
  }

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    localStorage.removeItem('token');
  }

  setCredentials(mail: string, password: string, token: string) {
    localStorage.setItem('email', mail);
    localStorage.setItem('password', password);
    localStorage.setItem('token', token);
  }

  getCredentials(): { mail: string; pass: string; token: string } {
    let mail = localStorage.getItem('email');
    let pass = localStorage.getItem('password');
    let token = localStorage.getItem('token');
    return { mail, pass, token };
  }
}
