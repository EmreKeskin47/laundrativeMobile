import { MusteriAdres } from './../models/MusteriAdres';
import { AuthService } from './auth.service';
import { KategoriCins } from './../models/KategoriCins';
import { Isletme } from './../models/İsletme';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class IsletmeService {
  url: string = `${BASE_URL}/isletme`;

  httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Cache-Control', 'no-cache')
    .set('Authorization', `Bearer ${this.authService.getCredentials().token}`);
  options = { headers: this.httpHeaders, withCredentials: true };

  currentInstitutionList: Isletme[];
  selectedInstitution: Isletme = null;
  locationOfSelected: string;

  workingHoursOfSelectedIns = [];
  standardDelivery;
  expressDelivery;
  premiumDelivery;

  selectedDeliveryDate: Date = new Date();
  selectedDeliveryAddress: MusteriAdres;
  selectedCategoryList: number[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  setSelectedCategoryList(selected: any) {
    this.selectedCategoryList = selected;
  }

  getSelected() {
    return this.selectedCategoryList;
  }

  setSelectedTeslimAlma(hour, day) {
    this.selectedDeliveryDate.setDate(day);
    this.selectedDeliveryDate.setHours(hour);
    console.log(this.selectedDeliveryDate);
  }

  getInstitutionsInNeighborhood(): Observable<any[]> {
    this.selectedDeliveryAddress;
    try {
      return this.http.post<any[]>(
        this.url,
        {
          mahalleId: this.selectedDeliveryAddress,
          teslimAlmaTarihi: this.selectedDeliveryDate,
          hizmetlerArr: this.selectedCategoryList,
        },
        this.options
      );
    } catch (err) {
      console.log('GET ins by neighborhood id ', err);
    }
  }

  getItemsInInstitution(storeID: number): Observable<KategoriCins[]> {
    try {
      return this.http.get<KategoriCins[]>(
        `${this.url}/sorgu?isletmeId=${storeID}`,
        this.options
      );
    } catch (err) {
      console.log('Error in GET store content by id', err);
    }
  }

  setSelectedInstituionCard(store: Isletme, location: string) {
    this.selectedInstitution = store;
    this.locationOfSelected = location;
    this.workingHoursOfSelectedIns = this.selectedInstitution.calisma_saatleri;
  }

  setSelectedDeliveryAddress(adres: MusteriAdres) {
    this.selectedDeliveryAddress = adres;
  }
}
