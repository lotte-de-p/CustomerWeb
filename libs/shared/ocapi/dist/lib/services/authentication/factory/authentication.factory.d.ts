import { ConfigService } from '@telenet/ng-lib-config';
import { AuthenticationProvider } from '../providers';
import { UrlService } from '@telenet/ng-lib-page';
import { AuthenticationService } from '../models';
export declare const authenticationProviderFactory: (urlService: UrlService, configService: ConfigService) => AuthenticationProvider;
export declare const authenticationServiceFactory: (urlService: UrlService) => AuthenticationService;
//# sourceMappingURL=authentication.factory.d.ts.map