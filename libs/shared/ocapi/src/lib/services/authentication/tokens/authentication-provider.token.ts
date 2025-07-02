import { inject, InjectionToken } from '@angular/core';
import { AuthenticationProvider } from '../providers';
import { authenticationProviderFactory } from '../factory';
import { UrlService } from '@telenet/ng-lib-page';
import { ConfigService } from '@telenet/ng-lib-config';

export const AUTH_PROVIDER = new InjectionToken<AuthenticationProvider>('AuthProvider', {
  providedIn: 'root',
  factory: () => {
    const urlService = inject(UrlService);
    const configService = inject(ConfigService);
    return authenticationProviderFactory(urlService, configService);
  },
});
