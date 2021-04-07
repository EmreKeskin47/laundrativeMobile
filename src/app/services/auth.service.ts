import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './../models/User';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = `${BASE_URL}/na/customer/register`;
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    const body = JSON.stringify(user);
    return this.http.post(this.url, body, { headers: this.headers });
  }

  login(email: string, password: string) {
    const body = JSON.stringify({ email: email, password: password });
    return this.http.post(`${BASE_URL}/login`, body);
  }
}
