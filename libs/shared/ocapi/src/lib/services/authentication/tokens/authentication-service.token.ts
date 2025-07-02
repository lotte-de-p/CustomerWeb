import { inject, InjectionToken } from '@angular/core';
import { UrlService } from '@telenet/ng-lib-page';
import { authenticationServiceFactory } from '../factory';
import { AuthenticationService } from '../models';

export const AUTH_SERVICE = new InjectionToken<AuthenticationService>('AuthService', {
  providedIn: 'root',
  factory: () => {
    const urlService = inject(UrlService);
    return authenticationServiceFactory(urlService);
  },
});
