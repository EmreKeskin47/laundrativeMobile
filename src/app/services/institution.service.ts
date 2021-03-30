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

  getInstitutionsInNeighborhood(
    neighborhoodId: number,
    categories: number[]
  ): Observable<Institution[]> {
    try {
      const date = new Date();
      console.log('DATE BAS', date);
      return this.http.get<Institution[]>(
        'https://monster:23000/institution/?neighborhoodId=3&categories=7&date=2021-03-29T17:45:00'
      );
    } catch (err) {
      console.log('GET ins by neighborhood id ', err);
    }
  }
}
