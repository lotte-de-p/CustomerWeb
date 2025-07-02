import { Config, CustomWindow, PathCategorisation, TelenetGroup, windowFactory } from './window.factory';

describe('windowFactory', () => {
  let originalWindow: CustomWindow;

  beforeEach(() => {
    originalWindow = { ...window } as CustomWindow;
  });

  afterEach(() => {
    Object.assign(window, originalWindow);
  });

  it('should create Config object if not present', () => {
    delete (window as CustomWindow).Config;
    const result = windowFactory();
    expect((result as CustomWindow).Config).toBeDefined();
    expect((result as CustomWindow).Config?.['ocapi-url']).toBe('https://api.int.telenet.be/ocapi');
  });

  it('should not overwrite existing Config object', () => {
    const existingConfig: Config = {
      'ocapi-url': 'https://existing.url',
      'omapi-url': '',
      'omapi-query-url': '',
      'openid-auth-url': '',
      'openid-url': '',
      'gateway-url': '',
      'sofy-url': '',
      'gsa-url': '',
      'openid-client-id': '',
      'oauth-callback-url': '',
      'php-eshop-url': '',
      'base-ac-systems-url': '',
      'recaptcha-api-url': '',
      'recaptcha-site-key': '',
      'recaptcha-v3-site-key': '',
      'is-author-mode': '',
      'kbc-post-message-receiver-origin-url': '',
      'oauth-url-pid': '',
      'oauth-callback-url-pid': '',
      'search-index-parameter': '',
    };
    (window as CustomWindow).Config = existingConfig;
    const result = windowFactory();
    expect((result as CustomWindow).Config).toBe(existingConfig);
  });

  it('should create TelenetGroup object if not present', () => {
    delete (window as CustomWindow).TelenetGroup;
    const result = windowFactory();
    expect((result as CustomWindow).TelenetGroup).toBeDefined();
  });

  it('should not overwrite existing TelenetGroup object', () => {
    const existingTelenetGroup: TelenetGroup = { pathCategorisation: { customerCategory: '' } };
    (window as CustomWindow).TelenetGroup = existingTelenetGroup;
    const result = windowFactory();
    expect((result as CustomWindow).TelenetGroup).toBe(existingTelenetGroup);
  });

  it('should create pathCategorisation object if not present', () => {
    (window as CustomWindow).TelenetGroup = { pathCategorisation: {} as PathCategorisation };
    const result = windowFactory();
    expect((result as CustomWindow).TelenetGroup?.pathCategorisation).toBeDefined();
  });

  it('should not overwrite existing pathCategorisation object', () => {
    const existingPathCategorisation: PathCategorisation = { customerCategory: '' };
    (window as CustomWindow).TelenetGroup = { pathCategorisation: existingPathCategorisation };
    const result = windowFactory();
    expect((result as CustomWindow).TelenetGroup?.pathCategorisation).toBe(existingPathCategorisation);
  });

  it('should set customerCategory if not present', () => {
    (window as CustomWindow).TelenetGroup = { pathCategorisation: {} as PathCategorisation };
    const result = windowFactory();
    expect((result as CustomWindow).TelenetGroup?.pathCategorisation['customerCategory']).toBe('RESIDENTIAL');
  });

  it('should not overwrite existing customerCategory', () => {
    const existingCustomerCategory = 'BUSINESS';
    (window as CustomWindow).TelenetGroup = { pathCategorisation: { customerCategory: existingCustomerCategory } };
    const result = windowFactory();
    expect((result as CustomWindow).TelenetGroup?.pathCategorisation['customerCategory']).toBe(
      existingCustomerCategory
    );
  });
});
