import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musteri } from '../models/Musteri';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = `${BASE_URL}/musteri`;
  url2: string = `${BASE_URL}/kullanici`;
  private _currentPlatform;

  constructor(private http: HttpClient, private platform: Platform) {
    this.setCurrentPlatform();
  }

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
    if (this._currentPlatform !== 'browser') {
      let mail = localStorage.getItem('email');
      let pass = localStorage.getItem('password');
      let token = localStorage.getItem('token');
      return { mail, pass, token };
    } else {
      let token =
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsb2dpbiIsImF1ZCI6ImxldmVudC5ndXJlbkBnbWFpbC5jb20iLCJqdGkiOiIxIiwiZXhwIjoxNjE5Mzc5MTY5fQ.8jjzohhgn1W9vA4zmeq4okRFKvDX8H5DoFZ_Z1VoEcTSW43q2ANzQalSjnhl0kUMOeKmb5Cu3BnuMUglf1l_Tg';
      return { mail: 'levent.guren@gmail.com', pass: '123', token };
    }
  }

  get currentPlatform() {
    return this._currentPlatform;
  }

  isNative() {
    return this._currentPlatform === 'native';
  }
  isBrowser() {
    return this._currentPlatform === 'browser';
  }

  private setCurrentPlatform() {
    // Are we on mobile platform? Yes if platform is ios or android, but not desktop or mobileweb, no otherwise
    if (
      this.platform.is('ios') ||
      (this.platform.is('android') &&
        !(this.platform.is('desktop') || this.platform.is('mobileweb')))
    ) {
      this._currentPlatform = 'mobile';
    } else {
      this._currentPlatform = 'browser';
    }
  }
}
