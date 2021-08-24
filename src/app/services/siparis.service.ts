import { IsletmeService } from './isletme.service';
import { DeviceInfoService } from './device-info.service';
import { SiparisOlustur } from './../models/SiparisOlustur';
import { AuthService } from './auth.service';
import { MusteriSiparis } from './../models/MusteriSiparis';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from './../api/baseUrl';
import { Hizmet } from '../models/Hizmet';
import { Injectable } from '@angular/core';

export const tipAdlari = { 3: 'prm', 2: 'exp', 1: 'std', 0: 'std' };
export const kategoriAdi = {
  1: 'çamaşır yıkama',
  2: 'ütüleme',
  3: 'kuru temizleme',
  4: 'extra',
  5: 'halı yıkama',
  6: 'terzi',
  7: 'lostra',
};

export const indirimAdi = {
  1: 'kurum',
  2: 'musteri',
  3: 'özel',
  4: 'indirim yok',
  5: 'kampanya',
};

export const siparisDurum = new Map();
siparisDurum.set('YENI_KAYIT_FROM_WEB', { isim: 'teslim alınacak', durum: 0 });
siparisDurum.set('YENI_KAYIT_FROM_ANDROID', {
  isim: 'teslim alınacak',
  durum: 0,
});
siparisDurum.set('YENI_KAYIT_FROM_IOS', { isim: 'teslim alınacak', durum: 0 });
siparisDurum.set('TESLIM_ALINDI', { isim: 'teslim alındı', durum: 1 });
siparisDurum.set('SIPARIS_HAZIRLANIYOR', { isim: 'hazırlanıyor', durum: 1 });
siparisDurum.set('HAZIR_BILGISI_GONDERILDI', { isim: 'hazır', durum: 1 });
siparisDurum.set('TESLIM_EDILDI', { isim: 'teslim edildi', durum: 1 });
siparisDurum.set('SIPARIS_TAMAMLANDI', { isim: 'tamamlandı', durum: 1 });
siparisDurum.set('SIPARIS_GUNCELLENDI', { isim: 'güncellendi', durum: 1 });

@Injectable({
  providedIn: 'root',
})
export class SiparisService {
  url = `${BASE_URL}/siparis`;
  sepeteEklenenler: Hizmet[] = [];

  httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Cache-Control', 'no-cache')
    .set('Authorization', `Bearer ${this.authService.getCredentials().token}`);
  options = { headers: this.httpHeaders, withCredentials: true };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private devInfo: DeviceInfoService,
    private isletmeSrv: IsletmeService
  ) {}

  setSepeteEklenenler(list: Hizmet[]) {
    this.sepeteEklenenler = list;
  }

  getSepeteEklenenler() {
    return this.sepeteEklenenler;
  }

  getOrderList(): Observable<MusteriSiparis[]> {
    try {
      return this.http.get<any>(`${this.url}/liste`, this.options);
    } catch (err) {
      console.log('err in GET order list of customer');
    }
  }

  deleteOrderWithId(id: string): Observable<any> {
    let user = this.authService.getCredentials();
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id,
        token: user.token,
      },
    };
    try {
      return this.http.delete<any>(`${this.url}/liste`, options);
    } catch (err) {
      console.log('err in DELETE order of customer');
    }
  }

  async createOrder(siparis: SiparisOlustur) {
    let os = this.devInfo.currentPlatform;
    let dev = await this.devInfo.setOtherDeviceInfo();
    console.log(JSON.stringify(dev));

    var data = {
      isletimSistemi: os,
      isletimSistemiBilgisi: dev,
      ...siparis,
    };
    var body = JSON.stringify(data);
    console.log(body);

    try {
      return this.http.post<any>(`${this.url}/olustur`, body, this.options);
    } catch (err) {
      console.log('err in POST order', err);
    }
  }

  //   calculateTotal() {
  //     let total = 0;
  //     this.currentCardContent.forEach((item) => {
  //       total += item.fiyatlar[0].fiyat * item.adet;
  //     });
  //     this.currentCardCostContent = {
  //       total: total,
  //       totalTax: (total * 8) / 100,
  //       totalDeliveryFee: 0,
  //     };
  //   }
}
