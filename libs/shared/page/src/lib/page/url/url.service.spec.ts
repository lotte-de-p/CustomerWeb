import { TestBed } from '@angular/core/testing';
import { UrlService } from './url.service';
import { UrlParam } from './url-param.model';
import { cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { ClientBrowserTypeService } from '../client-browser-type/client-browser-type.service';
import { QueryParamEnum } from '../enums/query-param.enum';
import { DataLayerService } from '@telenet/ng-lib-datalayer';

const spyOn = jest.spyOn;

const TEST_URL = 'http://testurl.com';
const URL_TO_OPEN = 'http://url.to.open.com';
const REDIRECT_URL = 'http://redirecturl.com';
describe('UrlService', () => {
  let urlService: UrlService;
  let dataLayerService: DataLayerService;
  let clientBrowserTypeService: ClientBrowserTypeService;
  const mockWindow = {
    location: {
      href: TEST_URL,
      search: '',
      hash: '',
      origin: '',
      pathname: '',
      assign: new Function(),
    },
    document: {
      createElement: function (_: unknown) {
        return {
          target: '',
          href: '',
          dispatchEvent: new Function(),
        };
      },
    },
    open: (_: string, _target: unknown) => undefined,
    history: {
      back: new Function(),
      replaceState: new Function(),
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UrlService,
        DataLayerService,
        ClientBrowserTypeService,
        {
          provide: 'Window',
          useValue: mockWindow,
        },
      ],
    });
    spyOn(mockWindow, 'open');
    mockWindow.location.assign = jest.fn();
    spyOn(mockWindow.document, 'createElement');
    urlService = TestBed.inject(UrlService);
    clientBrowserTypeService = TestBed.inject(ClientBrowserTypeService);
    dataLayerService = TestBed.inject(DataLayerService);
  });

  describe('getCurrentUrl', () => {
    it('should return the current url', () => {
      expect(urlService.getCurrentUrl()).toBe(TEST_URL);
    });
  });

  describe('openWindow', () => {
    it('should call the window open function', () => {
      urlService.openWindow(URL_TO_OPEN);

      expect(mockWindow.open).toHaveBeenCalledWith(URL_TO_OPEN, '_self');
    });
  });

  describe('openNewTab', () => {
    it('should call the window open function', () => {
      spyOn(clientBrowserTypeService, 'isClientUsingSafari').mockReturnValue(false);
      urlService.openNewTab(URL_TO_OPEN);

      expect(mockWindow.open).toHaveBeenCalledWith(URL_TO_OPEN, '_blank');
    });

    it('should call the window create click event to open link in new tab for safari browser', () => {
      spyOn(clientBrowserTypeService, 'isClientUsingSafari').mockReturnValue(true);
      urlService.openNewTab(URL_TO_OPEN);

      expect(mockWindow.document.createElement).toHaveBeenCalledWith('a');
    });
  });

  describe('getUrlWithParams', () => {
    it('should return url given params', () => {
      const param1 = new UrlParam('a', 'a');
      const param2 = new UrlParam('b', 'b');

      const url = urlService.getUrlWithParams(TEST_URL, [param1, param2]);

      expect(url).toBe('http://testurl.com?a=a&b=b');
    });
  });

  describe('redirectTo', () => {
    it('should set the window variable if AnalyticsPromises are empty', () => {
      const promiseArray: Promise<boolean>[] = [];
      spyOn(dataLayerService, 'getAnalyticsPromises').mockReturnValue(promiseArray);

      urlService.redirectTo(REDIRECT_URL);

      expect(mockWindow.location.href).toBe(REDIRECT_URL);
    });

    it('should redirect the user even when datalayer doesnt resolve the promise in time', (done) => {
      jest.useFakeTimers();
      jest.spyOn(global, 'setTimeout');
      console.warn = jest.fn();

      spyOn(dataLayerService, 'getAnalyticsPromises').mockReturnValue([
        new Promise(() => {
          // unresolved promise
        }),
      ]);

      urlService.redirectTo(REDIRECT_URL);
      jest.advanceTimersByTime(6000);

      expect(mockWindow.location.href).toBe(REDIRECT_URL);
      expect(console.warn).toHaveBeenCalled();
      done();
    });
    it('should set the window variable if AnalyticsPromises is not empty', () => {
      const promise = new Promise<boolean>(function (resolve) {
        resolve(true);
      });
      const promiseArray: Promise<boolean>[] = [promise];
      spyOn(dataLayerService, 'getAnalyticsPromises').mockReturnValue(promiseArray);
      urlService.redirectTo(REDIRECT_URL);

      expect(mockWindow.location.href).toBe(REDIRECT_URL);
    });
  });

  describe('doHistoryBack', () => {
    it('should perform location history back', () => {
      mockWindow.history.back = jest.fn();

      urlService.doHistoryBack();

      expect(mockWindow.history.back).toHaveBeenCalled();
    });
  });

  describe('getUrlWithOnlyHashParam', () => {
    it('should return url string with only hash params', () => {
      mockWindow.location.hash = '#/prop=p';
      const actual = urlService.getUrlWithOnlyHashParam();

      expect(actual).toBe('#/prop=p');
    });
  });

  describe('getRequestParametersAsString', () => {
    it('should return empty string if window location search is empty', () => {
      mockWindow.location.search = '';
      const actual = urlService.getRequestParametersAsString();

      expect(actual).toBe('');
    });

    it('should return request parameters as string', () => {
      const requestparameters = '?page=1&mode=b';
      mockWindow.location.search = requestparameters;
      const actual = urlService.getRequestParametersAsString();

      expect(actual).toBe(requestparameters);
    });
  });

  describe('getRequestParameters', () => {
    it('should return a set of search parameters', () => {
      const parameters = urlService.getRequestParameters();

      expect(parameters['page']).toBe('1');
      expect(parameters['mode']).toBe('b');
    });
  });

  describe('getRequestParameterOrDefault', () => {
    it('should return the request parameter when one is present', () => {
      const result = urlService.getRequestParameterOrDefault('page', 'empty');

      expect(result).toBe('1');
    });

    it('should return the default when the parameter is not found', () => {
      const result = urlService.getRequestParameterOrDefault('nonexisting', 'empty');

      expect(result).toBe('empty');
    });
  });

  describe('getHashParameter', () => {
    it('should return null if no parameter is found', () => {
      const result = urlService.getHashParameter('test');

      expect(result).toBe(null);
    });
  });

  describe('getHashParameters', () => {
    it('should return params if hash parmeters are found', () => {
      mockWindow.location.href = 'https://www.abc.com#p1=330';
      mockWindow.location.hash = '#p1=330';
      const objHashParams = {
        p1: {
          key: 'p1',
          value: '330',
        },
      };
      spyOn(urlService, 'getHashParameters').mockReturnValue(objHashParams);
      const result = urlService.getHashParameters();

      expect(result).toEqual(objHashParams);
    });
  });

  describe('getParameterByName', () => {
    it('should fetch proper query param', () => {
      mockWindow.location.search =
        '?channel=sales&referrer_url=http://www.sup.base.be/en/sales.html?flow=marketing&json=abcd';

      const actual = urlService.getParameterByName('referrer_url');

      expect(actual).toBe('http://www.sup.base.be/en/sales.html?flow=marketing');
    });

    it('should fetch proper query param for given key', () => {
      mockWindow.location.search = 'http://www.sup.base.be/en/sales.html?flow=marketing&val=N4YFwEX+pr8cAAmNdRGM3g==';

      const actual = urlService.getParameterByName('val');

      expect(actual).toBe('N4YFwEX+pr8cAAmNdRGM3g==');
    });

    it('should fetch proper query param for given key', () => {
      mockWindow.location.search = 'http://www.sup.base.be/en/sales.html?flow=marketing&val=weRlzTPLgVRTYgYzrRQolw==';

      const actual = urlService.getParameterByName('val');

      expect(actual).toBe('weRlzTPLgVRTYgYzrRQolw==');
    });

    it('should fetch proper query param for a given key', () => {
      mockWindow.location.search = 'http://www.sup.base.be/en/sales.html?flow=marketing&val=yoxD4JZTLiE6g8JObaPcqg==';

      const actual = urlService.getParameterByName('val');

      expect(actual).toBe('yoxD4JZTLiE6g8JObaPcqg==');
    });
  });

  describe('getParamsValueFromUrl', () => {
    it('should fetch params value from url', () => {
      const url = 'https://api.int.telenet.be/omapi-query/public/hc-products/v1/products?itemcodes=2063620&flow=esales';
      const actual = urlService.getParamsValueFromUrl(url, 'itemcodes');
      expect(actual).toEqual('2063620');
    });
    it('should return value 123 for paramsKey x with structure ?paramKey=', () => {
      const url =
        'https://api.int.telenet.be/omapi-query/public/hc-products/v1/products?x=123&itemcodes=2063620&flow=esales';
      const actual = urlService.getParamsValueFromUrl(url, 'x');
      expect(actual).toEqual('123');
    });
    it('should return value 2063620 for paramKey itemcodes with structure &paramKey=', () => {
      const url = 'https://api.int.telenet.be/omapi-query/public/hc-products/v1/products?x=123&itemcodes=2063620';
      const actual = urlService.getParamsValueFromUrl(url, 'itemcodes');
      expect(actual).toEqual('2063620');
    });
    it('should return the itemcode 2063620 from the url with structure ?paramKey=', () => {
      const url = 'https://api.int.telenet.be/omapi-query/public/hc-products/v1/products?itemcodes=2063620';
      const actual = urlService.getParamsValueFromUrl(url, 'itemcodes');
      expect(actual).toEqual('2063620');
    });
  });

  describe('fromSource', () => {
    it('should return true if SOURCE value is itsme in request parameter', () => {
      spyOn(urlService, 'getRequestParamValue').mockReturnValue('itsme');

      const actual = urlService.fromSource(QueryParamEnum.SOURCE_ITS_ME);

      expect(actual).toBe(true);
    });

    it('should return false if SOURCE value is not itsme in request parameter', () => {
      spyOn(urlService, 'getRequestParamValue').mockReturnValue('');

      const actual = urlService.fromSource(QueryParamEnum.SOURCE_ITS_ME);

      expect(actual).toBe(false);
    });
  });

  describe('removeURLParameters', () => {
    it('should remove proper query param for given key', () => {
      mockWindow.location.search = '?flow=marketing&val=yoxD4JZTLiE6g8JObaPcqg==';
      mockWindow.location.pathname = '/';
      mockWindow.location.hash = '';
      mockWindow.history.replaceState = jest.fn();
      urlService.removeURLParameters(['val']);
      expect(mockWindow.history.replaceState).toHaveBeenCalledWith({}, undefined, '/?flow=marketing');
    });
  });

  describe('removeParametersFromUrl', () => {
    it('should remove paramter from the given url', () => {
      const url = urlService.removeParametersFromUrl('http://test.com?myparam=test', 'myparam');
      expect(url).toBe('http://test.com/');
    });

    it('should allow multiple parameters to be deleted', () => {
      const url = urlService.removeParametersFromUrl('http://test.com?myparam=test&secondparam=dummy&third=keep', [
        'myparam',
        'secondparam',
      ]);
      expect(url).toBe('http://test.com/?third=keep');
    });

    it('should return path as is if not a complete url', () => {
      const url = urlService.removeParametersFromUrl('/apath/?myparam=test', 'myparam');
      expect(url).toBe('/apath/?myparam=test');
    });
  });

  describe('replaceURLParameters', () => {
    it('should replace proper query param for given key', () => {
      mockWindow.location.search = '?flow=marketing&val=yoxD4JZTLiE6g8JObaPcqg==';
      mockWindow.location.pathname = '/';
      mockWindow.location.hash = '';
      mockWindow.history.replaceState = jest.fn();
      urlService.replaceURLParameters([
        { key: 'flow', value: 'test' },
        { key: 'val', value: 'changed' },
      ]);
      expect(mockWindow.history.replaceState).toHaveBeenCalledWith({}, undefined, '/?flow=test&val=changed');
    });

    it('should add query param when key not present on url', () => {
      mockWindow.location.search = '?flow=marketing';
      mockWindow.location.pathname = '/';
      mockWindow.location.hash = '';
      mockWindow.history.replaceState = jest.fn();
      urlService.replaceURLParameters([{ key: 'val', value: 'changed' }]);
      expect(mockWindow.history.replaceState).toHaveBeenCalledWith({}, undefined, '/?flow=marketing&val=changed');
    });

    it('should replace query param based on decoded key', () => {
      mockWindow.location.search = '?key%20with%20spaces=initial';
      mockWindow.location.pathname = '/';
      mockWindow.location.hash = '';
      mockWindow.history.replaceState = jest.fn();
      urlService.replaceURLParameters([{ key: 'key with spaces', value: 'changed' }]);
      expect(mockWindow.history.replaceState).toHaveBeenCalledWith({}, undefined, '/?key%20with%20spaces=changed');
    });

    it('should replace query param based on encoded value', () => {
      mockWindow.location.search = '?key%20with%20spaces=initial';
      mockWindow.location.pathname = '/';
      mockWindow.location.hash = '';
      mockWindow.history.replaceState = jest.fn();
      urlService.replaceURLParameters([{ key: 'key with spaces', value: 'value with special characters: / & ;' }]);
      expect(mockWindow.history.replaceState).toHaveBeenCalledWith(
        {},
        undefined,
        '/?key%20with%20spaces=value%20with%20special%20characters%3A%20%2F%20%26%20%3B'
      );
    });
  });

  describe('buildUrlWithParams', () => {
    let url = '';
    let params: Map<string, string>;
    beforeEach(() => {
      url = 'https://www2.telenet.be/sales';
      params = new Map<string, string>();
    });

    it('should return the url with parameters when one parameter is passed', () => {
      params.set('sdata', 'XQAAAAInAAAAAAAAAABBqUpG89Dgqch');

      const actual = urlService.buildUrlWithParams(url, params);

      expect(actual).toBe('https://www2.telenet.be/sales?sdata=XQAAAAInAAAAAAAAAABBqUpG89Dgqch');
    });

    it('should return the url with parameters when multiple parameters are passed', () => {
      params.set('sdata', 'XQAAAAInAAAAAAAAAABBqUpG89Dgqch');
      params.set('addressId', '59few49fe8w4fw');

      const actual = urlService.buildUrlWithParams(url, params);

      expect(actual).toBe(
        'https://www2.telenet.be/sales?sdata=XQAAAAInAAAAAAAAAABBqUpG89Dgqch&addressId=59few49fe8w4fw'
      );
    });

    it('should return the url when no parameters are passed', () => {
      const actual = urlService.buildUrlWithParams(url, params);

      expect(actual).toBe('https://www2.telenet.be/sales');
    });
  });

  describe('getOrigin', () => {
    it('should return the origin', () => {
      mockWindow.location.origin = 'https://www.testorigin.com';
      expect(urlService.getOrigin()).toBe('https://www.testorigin.com');
    });
  });

  describe('getActionParametersRemovedURL', () => {
    it('should remove proper query param for given key and return new url', () => {
      spyOn(urlService, 'getCurrentUrl').mockReturnValue(
        'https://www.int.telenet.be/residential/en/sales?flow=marketing&sdata=XQAAAAIkAAAAAAAAAABAqYnmbFEIbVbO7gEot3B8ofI0AxHk1A4LzntUm_xKXmHifMdc4TD__zGoQAA&action=register'
      );
      const newURL =
        'https://www.int.telenet.be/residential/en/sales?flow=marketing&sdata=XQAAAAIkAAAAAAAAAABAqYnmbFEIbVbO7gEot3B8ofI0AxHk1A4LzntUm_xKXmHifMdc4TD__zGoQAA';
      const actual = urlService.getActionParametersRemovedURL();
      expect(actual).toBe(newURL);
    });
  });

  describe('buildUrlWithHashParams', () => {
    let url = '';
    let params: Map<string, string>;
    beforeEach(() => {
      url = 'https://www2.telenet.be/create-profile';
      params = new Map<string, string>();
    });

    it('should return the url with parameters when one parameter is passed', () => {
      params.set('customerNumber', '1234567890');

      const actual = urlService.buildUrlWithHashParams(url, params);

      expect(actual).toBe('https://www2.telenet.be/create-profile/#/customerNumber=1234567890');
    });

    it('should return the url with hash parameters when multiple parameters are passed', () => {
      params.set('login', 'test@telenetgroup.be');
      params.set('redirectURL', 'https://www2.telenet.be/login');

      const actual = urlService.buildUrlWithHashParams(url, params);

      expect(actual).toBe(
        'https://www2.telenet.be/create-profile/#/login=test@telenetgroup.be/redirectURL=https://www2.telenet.be/login'
      );
    });

    it('should return the url when no parameters are passed', () => {
      const actual = urlService.buildUrlWithHashParams(url, params);

      expect(actual).toBe('https://www2.telenet.be/create-profile');
    });
  });

  describe('getParameters', () => {
    let url = '';
    beforeEach(() => {
      url = 'https://www2.telenet.be/create-profile?a=testa&b=testb';
    });

    it('should return the parameters in the url', () => {
      const actual = urlService.getParameters(url);
      const expected = new Map<string, string>([
        ['a', 'testa'],
        ['b', 'testb'],
      ]);

      expect(actual).toEqual(expected);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
