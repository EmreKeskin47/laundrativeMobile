import { MusteriAdres } from './../models/MusteriAdres';
import { AuthService } from './auth.service';
import { KategoriCins } from './../models/KategoriCins';
import { Isletme } from './../models/İsletme';
import { BASE_URL } from './../api/baseUrl';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class IsletmeService {
  //url: string = `${BASE_URL}/isletme`;

  httpHeaders;
  options: {
    headers?:
      | HttpHeaders
      | {
          [header: string]: string | string[];
        };
    withCredentials: boolean;
  };

  currentInstitutionList: Isletme[];
  selectedInstitution: Isletme = null;
  locationOfSelected: string;
  selectedIsletme: string = '';

  workingHoursOfSelectedIns = [];
  standardDelivery;
  expressDelivery;
  premiumDelivery;

  selectedDeliveryDate: Date = new Date();
  selectedDeliveryAddress: MusteriAdres;
  secilenKategoriler: number[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    @Inject('BASE_API_URL') private baseUrl: string
  ) {
    this.httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Cache-Control', 'no-cache')
      .set(
        'Authorization',
        `Bearer ${this.authService.getCredentials().token}`
      );
    this.options = { headers: this.httpHeaders, withCredentials: true };
  }

  setSelectedCategoryList(selected: number[]) {
    this.secilenKategoriler = selected;
  }

  getSelectedKategoriler() {
    return this.secilenKategoriler;
  }

  setSelectedTeslimAlma(hour: Date, day: Date) {
    this.selectedDeliveryDate.setDate(day.getDate());
    this.selectedDeliveryDate.setHours(hour.getHours());
  }

  setSelectedIsletme(isletme: string) {
    this.selectedIsletme = isletme;
  }

  getSelectedIsletme() {
    return this.selectedIsletme;
  }

  getInstitutionsInNeighborhood(): Observable<any[]> {
    this.selectedDeliveryAddress;
    try {
      return this.http.post<any[]>(
        `${this.baseUrl}/isletme/liste`,
        {
          mahalleId: this.selectedDeliveryAddress.mahalleId,
          teslimAlmaTarihi: this.selectedDeliveryDate,
          hizmetlerArr: this.secilenKategoriler,
        },
        this.options
      );
    } catch (err) {
      console.log('GET ins by neighborhood id ', err);
    }
  }

  getItemsInInstitution(storeID: number): Observable<KategoriCins[]> {
    try {
      let myhttpHeaders = {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${this.authService.getCredentials().token}`,
      };

      let myoptions = { headers: myhttpHeaders, withCredentials: true };
      return this.http.get<KategoriCins[]>(
        `${this.baseUrl}/isletme/sorgu?isletmeId=${storeID}`,
        myoptions
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
