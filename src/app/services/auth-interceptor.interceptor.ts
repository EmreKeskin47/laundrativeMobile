import { AuthService } from './auth.service';
import { Injectable, Inject } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retryWhen, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Platform } from '@ionic/angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private loginError = 0;
  private _currentPlatform;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private platform: Platform
  ) {
    this.setCurrentPlatform();
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let url = request.url;
    if (request.url.startsWith('/assets/')) {
      url = request.url;
    }
    const apiReq = request.clone({
      url: url,
      headers: request.headers
        .set('Cache-Control', 'no-cache, no-store, must-revalidate')
        .set('Pragma', 'no-cache')
        .set('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT')
        .set('If-Modified-Since', '0'),
    });
    if (this.loginError !== 0) {
      return next.handle(apiReq);
    }

    let hata;
    let errorCount = 0;
    return next.handle(apiReq).pipe(
      catchError((error, source) => {
        hata = error;
        errorCount++;
        return throwError(error);
      }),
      retryWhen((errors) => {
        if (
          errorCount === 1 &&
          hata &&
          hata.error &&
          hata.error.status === 403
        ) {
          this.loginError = 1;
          return this.doLogin();
        }
        return throwError(hata);
      })
    );
  }
  doLogin(): Observable<any> {
    var username;
    var password;
    if (this._currentPlatform == 'browser') {
      username = 'levent.guren@gmail.com';
      password = '123';
    } else {
      username = localStorage.getItem('username');
      password = localStorage.getItem('password');
    }

    return new Observable((observer) => {
      this.authService.login(username, password).subscribe(
        (res) => {
          this.toastr.error('Tekrar giriş yapıldı.');
          this.loginError = 0;
          observer.next('ok');
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }

  get currentPlatform() {
    return this._currentPlatform;
  }

  isNative() {
    return this._currentPlatform === 'native';
  }
  isBrowser() {
    return this._currentPlatform === 'browser';
  }

  private setCurrentPlatform() {
    // Are we on mobile platform? Yes if platform is ios or android, but not desktop or mobileweb, no otherwise
    if (
      this.platform.is('ios') ||
      (this.platform.is('android') &&
        !(this.platform.is('desktop') || this.platform.is('mobileweb')))
    ) {
      this._currentPlatform = 'mobile';
    } else {
      this._currentPlatform = 'browser';
    }
  }
}
