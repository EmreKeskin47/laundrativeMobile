import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musteri } from '../models/Musteri';
import { BASE_URL } from './../api/baseUrl';
import { Inject, Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = `${BASE_URL}/musteri`;
  url2: string = `${BASE_URL}/kullanici`;
  private _currentPlatform;

  httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Cache-Control', 'no-cache')
    .set('Authorization', `Bearer ${this.getCredentials().token}`);
  options = { headers: this.httpHeaders, withCredentials: true };

  constructor(
    private http: HttpClient,
    private platform: Platform,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {
    this.setCurrentPlatform();
  }

  getVersion(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/version`, this.options);
  }

  registerUser(user: Musteri): Observable<any> {
    let body = JSON.stringify(user);
    try {
      return this.http.post<any>(`${this.baseUrl}/musteri/olustur`, body);
    } catch (err) {
      console.log('Register user err ', err);
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/kullanici/giris?email=${email}&sifre=${password}`
    );
  }

  updateUserInfo(updatedUser: Musteri): Observable<any> {
    try {
      return this.http.put<any>(
        `${this.baseUrl}/musteri/guncelle`,
        updatedUser,
        this.options
      );
    } catch (err) {
      console.log('Register user err ', err);
    }
  }

  deleteUserAccount(sebepAciklamasi: string): Observable<any> {
    let user = this.getCredentials();
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        sebepAciklamasi: sebepAciklamasi,
        token: user.token,
      },
    };
    try {
      return this.http.delete<any>(`${this.url}/musteri/sil`, options);
    } catch (err) {
      console.log('DELETE user account err ', err);
    }
  }

  getUserInfo(): Observable<any> {
    try {
      return this.http.get(`${this.url}/musteri/musteriBilgisi`, this.options);
    } catch (err) {
      console.log('GET user account info', err);
    }
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
    // if (this._currentPlatform !== 'browser') {
    //   let mail = localStorage.getItem('email');
    //   let pass = localStorage.getItem('password');
    //   let token = localStorage.getItem('token');
    //   return { mail, pass, token };
    // } else {
    let token =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsb2dpbiIsImF1ZCI6ImFiZHVsbGFoMTg0MTBAaG90bWFpbC5jb20iLCJqdGkiOiIxNjg2NSIsImV4cCI6MTYzMDA4Mjg5MX0.HS2Jm3LwPrrrnL9DA1TsDcwNnaraaQkDPQ0NR81wJNmmUPbTqLWZAWc4qIG-cofGcsxUy4k5gSOAm6pMWPU63w';

    return { mail: 'abdullah18410@hotmail.com', pass: '123', token: null };
    //}
  }

  get currentPlatform() {
    return this._currentPlatform;
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
