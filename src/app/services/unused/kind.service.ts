import { Kind } from '../../models/Kind';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../api/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KindService {
  url: string = `${BASE_URL}/user/kind/`;
  constructor(private http: HttpClient) {}

  //Get Kinds
  getAllKinds(): Observable<Kind[]> {
    try {
      return this.http.get<Kind[]>(this.url);
    } catch (err) {
      console.log('GET kind err ', err);
    }
  }
}
