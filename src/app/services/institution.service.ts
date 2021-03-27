import { Institution } from '../models/Institution';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  url: string = `${BASE_URL}/institution/`;
  constructor(private http: HttpClient) {}

  //Get institutions
  getAllInstitutions(): Observable<Institution[]> {
    try {
      return this.http.get<Institution[]>(this.url);
    } catch (err) {
      console.log('GET institution err ', err);
    }
  }
}
