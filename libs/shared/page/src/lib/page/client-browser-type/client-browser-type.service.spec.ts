import { TestBed } from '@angular/core/testing';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { BrowserTypeEnum } from './browser-type.enum';
import { windowFactory } from '../url/window.testfactory';
import { ClientBrowserTypeService } from './client-browser-type.service';

describe('ClientBrowserTypeService', () => {
  let clientBrowserTypeService: ClientBrowserTypeService;

  const USER_AGENT_NAVIGATOR_PROPERTY = 'userAgent';
  const SAFARI_USER_AGENT = 'safari';
  const EDGE_USER_AGENT = 'edge';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientBrowserTypeService, { provide: 'Window', useValue: windowFactory() }],
    });

    clientBrowserTypeService = TestBed.inject(ClientBrowserTypeService);
  });

  describe('clientBrowserType', () => {
    it('should return edge when the client browser type is edge', () => {
      jest.spyOn(window.navigator, USER_AGENT_NAVIGATOR_PROPERTY, 'get').mockReturnValue(EDGE_USER_AGENT);

      const actual = clientBrowserTypeService.clientBrowserType();

      expect(actual).toBe(BrowserTypeEnum.EDGE);
    });
    it('should return opera when the client browser type is opera', () => {
      jest.spyOn(window.navigator, USER_AGENT_NAVIGATOR_PROPERTY, 'get').mockReturnValue('opr');
      Object.defineProperty(window, 'opr', { value: { test: 'test' } });

      const actual = clientBrowserTypeService.clientBrowserType();

      expect(actual).toBe(BrowserTypeEnum.OPERA);
    });
    it('should return chrome when the client browser type is chrome', () => {
      jest.spyOn(window.navigator, USER_AGENT_NAVIGATOR_PROPERTY, 'get').mockReturnValue('chrome');
      Object.defineProperty(window, 'chrome', { value: { test: 'test' } });

      const actual = clientBrowserTypeService.clientBrowserType();

      expect(actual).toBe(BrowserTypeEnum.CHROME);
    });
    it('should return internet explorer when the client browser type is internet explorer', () => {
      jest.spyOn(window.navigator, USER_AGENT_NAVIGATOR_PROPERTY, 'get').mockReturnValue('trident');

      const actual = clientBrowserTypeService.clientBrowserType();

      expect(actual).toBe(BrowserTypeEnum.INTERNET_EXPLORER);
    });
    it('should return firefox when the client browser type is firefox', () => {
      jest.spyOn(window.navigator, USER_AGENT_NAVIGATOR_PROPERTY, 'get').mockReturnValue('firefox');

      const actual = clientBrowserTypeService.clientBrowserType();

      expect(actual).toBe(BrowserTypeEnum.FIREFOX);
    });
    it('should return safari when the client browser type is safari', () => {
      jest.spyOn(window.navigator, USER_AGENT_NAVIGATOR_PROPERTY, 'get').mockReturnValue(SAFARI_USER_AGENT);

      const actual = clientBrowserTypeService.clientBrowserType();

      expect(actual).toBe(BrowserTypeEnum.SAFARI);
    });
    it('should return unknown when the client browser type is unknown', () => {
      jest.spyOn(window.navigator, USER_AGENT_NAVIGATOR_PROPERTY, 'get').mockReturnValue('someRandomUnknownBrowser');

      const actual = clientBrowserTypeService.clientBrowserType();

      expect(actual).toBe(BrowserTypeEnum.UNKNOWN);
    });
  });

  describe('isClientUsingSafari', () => {
    it('should return true if the client browser is safari', () => {
      jest.spyOn(window.navigator, USER_AGENT_NAVIGATOR_PROPERTY, 'get').mockReturnValue(SAFARI_USER_AGENT);

      const actual = clientBrowserTypeService.isClientUsingSafari();

      expect(actual).toEqual(true);
    });
    it('should return false if the client browser is not safari', () => {
      jest.spyOn(window.navigator, USER_AGENT_NAVIGATOR_PROPERTY, 'get').mockReturnValue(EDGE_USER_AGENT);

      const actual = clientBrowserTypeService.isClientUsingSafari();

      expect(actual).toEqual(false);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
