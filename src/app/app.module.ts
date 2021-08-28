import { environment } from './../environments/environment';
import { AuthInterceptor } from './services/auth-interceptor.interceptor';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { IonicSelectableModule } from 'ionic-selectable';
import { ToastrModule } from 'ngx-toastr';
import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import localeEn from '@angular/common/locales/en';
import { LongPressDirective } from './long-press.directive';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
registerLocaleData(localeEn, 'en');
registerLocaleData(localeTr, 'tr');

@NgModule({
  declarations: [AppComponent, LongPressDirective],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicSelectableModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'tr' },
    { provide: 'BASE_API_URL', useValue: environment.apiUrl },
    { provide: 'VERSION', useValue: environment.version },
    SplashScreen,
    CallNumber,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
