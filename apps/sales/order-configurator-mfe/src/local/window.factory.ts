export interface Config {
  'ocapi-url': string;
  'omapi-url': string;
  'omapi-query-url': string;
  'openid-auth-url': string;
  'openid-url': string;
  'gateway-url': string;
  'sofy-url': string;
  'gsa-url': string;
  'openid-client-id': string;
  'oauth-callback-url': string;
  'php-eshop-url': string;
  'base-ac-systems-url': string;
  'recaptcha-api-url': string;
  'recaptcha-site-key': string;
  'recaptcha-v3-site-key': string;
  'is-author-mode': string;
  'kbc-post-message-receiver-origin-url': string;
  'oauth-url-pid': string;
  'oauth-callback-url-pid': string;
  'search-index-parameter': string;
}

export interface PathCategorisation {
  customerCategory: string;
}

export interface TelenetGroup {
  pathCategorisation: PathCategorisation;
}

export interface CustomWindow extends Window {
  Config?: Config;
  TelenetGroup?: TelenetGroup;
}

export function windowFactory(): Window {
  const customWindow = window as CustomWindow;
  customWindow.Config = customWindow.Config || {
    'ocapi-url': 'https://api.int.telenet.be/ocapi',
    'omapi-url': 'https://api.int.telenet.be/omapi',
    'omapi-query-url': 'https://api.int.telenet.be/omapi-query/public',
    'openid-auth-url': 'https://login.int.telenet.be/openid/oauth/authorize',
    'openid-url': 'https://login.int.telenet.be/openid',
    'gateway-url': 'https://api.int.telenet.be',
    'sofy-url': 'https://int.sofy-dev.awscloud.external.telenet.be',
    'gsa-url': 'https://api.int.telenet.be/searchapi/gsa/api/',
    'openid-client-id': 'ocapi',
    'oauth-callback-url': '',
    'php-eshop-url': 'https://shop.int.telenet.be/shop/nl',
    'base-ac-systems-url': 'https://base.rest.ac-systems.com',
    'recaptcha-api-url': 'https://www.google.com/recaptcha/api.js',
    'recaptcha-site-key': '6Ld15hAbAAAAABL4l8LoTnBv-CBkhYE8Ukwc3aMQ',
    'recaptcha-v3-site-key': '6Lc2hCQbAAAAACaxx5NvByzCNYI4NSpgqsrrT4Wp',
    'is-author-mode': 'false',
    'kbc-post-message-receiver-origin-url': 'kbcPostMessageReceiverOriginUrl',
    'oauth-url-pid': 'oauthUrlPid',
    'oauth-callback-url-pid': 'oauthCallbackUrlPid',
    'search-index-parameter': 'searchIndexParameter',
  };
  customWindow.TelenetGroup = customWindow.TelenetGroup || { pathCategorisation: {} as PathCategorisation };
  customWindow.TelenetGroup.pathCategorisation['customerCategory'] =
    customWindow.TelenetGroup.pathCategorisation['customerCategory'] || 'RESIDENTIAL';

  return customWindow as Window;
}
