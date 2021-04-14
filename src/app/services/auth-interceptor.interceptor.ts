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
import { BASE_URL } from '../api/baseUrl';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private loginError = 0;
  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let url = this.baseUrl + request.url;
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
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
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
}
