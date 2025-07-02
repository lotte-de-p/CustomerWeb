import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { AuthenticationProvider, OcapiAuthenticationProvider, OpenidAuthenticationProvider } from '../providers';
import { UrlService } from '@telenet/ng-lib-page';
import { JWTAuthenticationService, TransparentAuthenticationService } from '../services';
import { AuthenticationService } from '../models';

const extractJwtParameter = (urlService: UrlService): string => {
  return urlService.getHashParameter('jwt') || urlService.getRequestParamValue('jwt', '');
};

export const authenticationProviderFactory = (
  urlService: UrlService,
  configService: ConfigService
): AuthenticationProvider => {
  const jwtParameter = extractJwtParameter(urlService);
  if (
    (configService.getConfig(ConfigConstants.AUTH_PROVIDER) === OcapiAuthenticationProvider.PROVIDER_TYPE ||
      urlService.getRequestParamValue('loginFlow', '') === 'oktaLogin') &&
    !jwtParameter
  ) {
    return new OcapiAuthenticationProvider();
  }
  return new OpenidAuthenticationProvider();
};

export const authenticationServiceFactory = (urlService: UrlService): AuthenticationService => {
  const jwtParameter = extractJwtParameter(urlService);

  if (jwtParameter) {
    return new JWTAuthenticationService();
  } else {
    return new TransparentAuthenticationService();
  }
};
