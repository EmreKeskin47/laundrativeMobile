import { Injectable } from '@angular/core';
import { BASE_URL } from '../../api/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from 'src/app/models/Type';

@Injectable({
  providedIn: 'root',
})
export class TypeService {
  url: string = `${BASE_URL}/user/type/`;

  constructor(private http: HttpClient) {}

  //Get Types
  getAllTypes(): Observable<Type[]> {
    try {
      return this.http.get<Type[]>(this.url);
    } catch (err) {
      console.log('GET type error', err);
    }
  }
}
