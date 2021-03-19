import { Category } from './../../models/Category';
import { Injectable } from '@angular/core';
import { BASE_URL } from './../api/baseUrl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url: string = `${BASE_URL}/user/kind/`;

  constructor(private http: HttpClient) {}

  //Get Categories
  getAllCategories(): Observable<Category[]> {
    try {
      return this.http.get<Category[]>(this.url);
    } catch (err) {
      console.log('GET category err', err);
    }
  }
}
