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
    const test = new User('name', 'password', 'testphone', 'test', 'test');
    const body = JSON.stringify(test);
    return this.http.post(this.url, test, { headers: this.headers });
  }
}
