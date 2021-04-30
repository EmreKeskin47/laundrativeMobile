import { AuthService } from './auth.service';
import { DetayliArama } from './../models/DetayliArama';
import { KategoriCins } from './../models/KategoriCins';
import { Isletme } from './../models/İsletme';
import { BASE_URL } from './../api/baseUrl';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstitutionService {
  url: string = `${BASE_URL}/kurum`;
  detailedSearchUrl: string = `${BASE_URL}/cins`;

  currentInstitutionList: Isletme[];
  selectedInstitution: Isletme = null;
  locationOfSelected: string;

  workingHoursOfSelectedIns = [];
  standardDelivery;
  expressDelivery;
  premiumDelivery;

  selectedDeliveryDate;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getInstitutionsInNeighborhood(
    neighborhoodId: number,
    categories: number[],
    date: Date,
    hour: Date
  ): Observable<Isletme[]> {
    this.selectedDeliveryDate = hour;
    let user = this.authService.getCredentials();
    try {
      return this.http.get<Isletme[]>(
        `${this.url}/liste?token=${
          user.token
        }&mahalleId=${neighborhoodId}&tarih=${date.toLocaleDateString()}%20${hour.toLocaleTimeString(
          'en-GB'
        )}&kategoriler=${categories}`
      );
    } catch (err) {
      console.log('GET ins by neighborhood id ', err);
    }
  }

  getItemsInInstitution(storeID: number): Observable<KategoriCins[]> {
    try {
      return this.http.get<KategoriCins[]>(
        `${this.url}/sorgu?kurumId=${storeID}`
      );
    } catch (err) {
      console.log('Error in GET store content by id', err);
    }
  }

  detailedSearch(
    neighborhoodId: number,
    date: Date,
    hour: Date,
    deliveryDate: Date,
    deliveryHour: Date,
    freeDelivery: boolean
  ): Observable<Isletme[]> {
    this.selectedDeliveryDate = hour;
    try {
      // return this.http.get<any>(
      //     `${
      //       this.url
      //     }/detaylıArama?mahalleId=${neighborhoodId}&teslimAlmaZaman=${date.toLocaleDateString()}%20${hour.toLocaleTimeString(
      //       'en-GB'
      //     )}&teslimEtmeZaman=${deliveryDate.toLocaleDateString()}%20${deliveryHour.toLocaleTimeString(
      //       'en-GB'
      //     )}&kategoriCinslerParam=3:4,5:6&musteriId=${customerId}&ucretsizTeslimat=${freeDelivery}`
      //   );
      return this.http.get<Isletme[]>(
        `${this.url}/detayliArama?mahalleId=3&teslimAlmaZaman=1/1/2010%2013:00&teslimEtmeZaman=1/1/2011%2014:00&kategoriCinslerParam=3:4,5:6&musteriId=1&ucretsizTeslimat=true`
      );
    } catch (err) {
      console.log('Error in GET detailed store search', err);
    }
  }

  searchInEveryIns(name: string): Observable<DetayliArama[]> {
    try {
      return this.http.get<DetayliArama[]>(
        `${this.detailedSearchUrl}/arama?urunAdi=${name}`
      );
    } catch (err) {
      console.log('Error in GET all store items search', err);
    }
  }

  setSelectedInstituionCard(store: Isletme, location: string) {
    this.selectedInstitution = store;
    this.locationOfSelected = location;
    this.workingHoursOfSelectedIns = this.selectedInstitution.calisma_saatleri;
    this.calculateDeliveryTime();
  }

  calculateDeliveryTime() {
    const openDate = new Date();
    let open = this.calculateAvailableDayHour(
      openDate.getDay(),
      openDate.getHours()
    );
    openDate.setHours(openDate.getHours() + open.daysToAdd * 24);
    openDate.setHours(open.hour);
    openDate.setMinutes(0);

    //standart type
    let standard = new Date(openDate.getTime());
    standard.setHours(openDate.getHours() + 48);
    let std = this.calculateAvailableDayHour(
      standard.getDay(),
      standard.getHours()
    );
    standard.setHours(std.hour);
    this.standardDelivery = standard;

    //express
    let express = new Date(openDate.getTime());
    express.setHours(openDate.getHours() + 24);
    let exp = this.calculateAvailableDayHour(
      express.getDay(),
      express.getHours()
    );
    express.setHours(exp.hour);
    this.expressDelivery = express;

    //premium
    let premium = new Date(openDate.getTime());
    premium.setHours(openDate.getHours() + 3);
    let prm = this.calculateAvailableDayHour(
      premium.getDay(),
      premium.getHours()
    );
    premium.setHours(prm.hour);
    this.premiumDelivery = premium;
  }

  calculateAvailableDayHour(
    day: number,
    hour: number
  ): { day: number; hour: number; daysToAdd: number } {
    //if store is open in selected day
    for (let i = day; i <= 7; i++) {
      //if store is open in current
      if (this.workingHoursOfSelectedIns[i]) {
        let openTime = parseInt(
          this.workingHoursOfSelectedIns[i].baslangic_saati.slice(0, 2)
        );
        let closeTime = parseInt(
          this.workingHoursOfSelectedIns[i].bitis_saati.slice(0, 2)
        );
        if (i != day) {
          return { day: i, hour: openTime, daysToAdd: Math.abs(day - i) };
        } else if (openTime < hour && closeTime > hour) {
          return { day: i, hour: hour, daysToAdd: Math.abs(day - i) };
        }
      } else if (i == 7) {
        i = 1;
      }
    }
  }
}
