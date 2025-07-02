import { TestBed } from '@angular/core/testing';
import { ConfigConstants } from './config.constants';
import { ConfigService } from './config.service';

describe('Config', () => {
  let configService: ConfigService;
  const openidAuthUrl = 'https://login.int.telenet.be/openid/oauth/authorize';
  const windowMockObject = {
    Config: {
      'ocapi-url': 'https://api.int.telenet.be/ocapi',
      'omapi-url': 'https://api.int.telenet.be/omapi',
      'omapi-query-url': 'https://api.int.telenet.be/omapi-query/public',
      'openid-url': 'https://login.int.telenet.be/openid',
      'gateway-url': 'https://api.int.telenet.be',
      'sofy-url': 'https://int.sofy-dev.awscloud.external.telenet.be',
      'gsa-url': 'https://api.int.telenet.be/searchapi/gsa/api/',
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
      'ocapi-login-override': false,
      'search-api-url': 'https://api.dvp.telenet.be/search/api/',
      'openid-auth-url': openidAuthUrl,
      'ocapi-client-id': 'telenet_be',
      'openid-client-id': 'ocapi',
      'auth-provider': 'ocapi',
      remoteHosts: {},
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      providers: [
        {
          provide: 'Window',
          useValue: windowMockObject,
        },
      ],
    }).compileComponents();
    configService = TestBed.inject(ConfigService);
  });

  describe('getAllConfig', () => {
    it('should return the whole config given no key', () => {
      expect(configService.getAllConfig()).toEqual(windowMockObject.Config);
    });
  });
  describe('getConfig', () => {
    it('should add a config to the configuration and return correct value based on the given key', () => {
      expect(configService.getConfig(ConfigConstants.OCAPI_URl)).toBe('https://api.int.telenet.be/ocapi');
      expect(configService.getConfig(ConfigConstants.OPENID_AUTH_URL)).toBe(openidAuthUrl);
      expect(configService.getConfig(ConfigConstants.AUTH_PROVIDER)).toBe('ocapi');
      expect(configService.getConfig(ConfigConstants.OPENID_AUTH_URL)).toBe(openidAuthUrl);
      expect(configService.getConfig(ConfigConstants.OPENID_CLIENT_ID)).toBe('ocapi');
      expect(configService.getConfig(ConfigConstants.OCAPI_CLIENT_ID)).toBe('telenet_be');
    });

    it('when config not set on window return empty', () => {
      const localConfigService = new ConfigService({} as Window);
      expect(localConfigService.getConfig(ConfigConstants.OCAPI_URl)).toBe('');
      expect(localConfigService.getConfig(ConfigConstants.OPENID_AUTH_URL)).toBe('');
    });
  });
  describe('addRemoteHost', () => {
    it('should add a remote host config', () => {
      const remoteModuleConfigOptions = {
        remoteEntryPath: 'someEntry',
        remoteHost: 'someHost',
        remoteName: 'someRemoteName',
        module: 'someModule',
        exposedEsModule: 'exposedModule',
        moduleId: 'some-module-id',
      };
      configService.addRemoteHostConfig('testModule', remoteModuleConfigOptions);
      expect(configService.getRemoteHostConfig('testModule')).toEqual(remoteModuleConfigOptions);
    });
  });
});
