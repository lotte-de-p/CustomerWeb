import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IonicPortalCoreService } from '../ionic-portal-core-service/ionic-portal-core.service';
import { PortalStorageKeys } from '../../enums';

@Injectable({
  providedIn: 'root',
})
export class PortalAuthService implements HttpInterceptor {
  private readonly TOKEN_REQUEST_MESSAGE = 'Requesting TOKEN when unauthorized';
  private readonly TOKEN_REQUEST_DATA = 'Requesting TOKEN';

  constructor(private readonly ionicPortalCoreService: IonicPortalCoreService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (error) => {
          if (
            error.status === 401 &&
            sessionStorage.getItem(PortalStorageKeys.TOKEN_ACCESS) &&
            localStorage.getItem(PortalStorageKeys.COUNT) === '0'
          ) {
            console.info(this.TOKEN_REQUEST_MESSAGE);

            this.ionicPortalCoreService.publishToTopic('accessToken', { data: this.TOKEN_REQUEST_DATA }).then(() => {
              localStorage.setItem(PortalStorageKeys.COUNT, '1');
            });
          }
        },
      })
    );
  }
}
