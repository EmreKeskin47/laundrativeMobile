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
  currentInstitutionList: Institution[] = [];
  constructor(private http: HttpClient) {}

  //Get institutions
  getAllInstitutions(): Observable<Institution[]> {
    try {
      return this.http.get<Institution[]>(this.url);
    } catch (err) {
      console.log('GET institution err ', err);
    }
  }

  //Make dynamic
  getInstitutionsInNeighborhood(
    neighborhoodId: number,
    categories: string[]
  ): Observable<Institution[]> {
    try {
      const date = new Date();
      return this.http.get<Institution[]>(
        `${this.url}?neighborhoodId=3&categories=7&date=2021-03-29T17:45:00`
      );
    } catch (err) {
      console.log('GET ins by neighborhood id ', err);
    }
  }
}
