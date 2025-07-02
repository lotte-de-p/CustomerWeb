import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConfigConstants, ConfigService } from '@telenet/ng-lib-config';
import { anything, capture, instance, mock, verify, when } from 'ts-mockito';
import { OcapiService } from './ocapi.service';
import { OcapiCallConfig } from '../models/ocapi-call.model';
import { MapperInterface, cleanStylesFromDom } from '@telenet/ng-lib-shared';
import { MessageService, MessageType } from '@telenet/ng-lib-message';
import { UrlService, QueryParamEnum } from '@telenet/ng-lib-page';
import { DataLayerService, EventNameEnum, EventTypeEnum } from '@telenet/ng-lib-datalayer';
import * as udl from 'udl';
import { of } from 'rxjs';
import { OmapiQueryProductService, RawOmapiQueryProductInterface } from '@telenet/ng-lib-omapi-query';
import { AuthenticationState } from './authentication/state/authentication.state';
import { ErrorReportService } from './error-report.service';
const spyOn = jest.spyOn;

class DummyMapper {
  toModel() {
    return 'mapped response 1';
  }
}
const TEST_ENDPOINT = 'https://api.trg.telenet.be/ocapi/url-to-call';

const HcProductsQueryUrl =
  'https://api.int.telenet.be/omapi-query/public/hc-products/v1/products?itemcodes=2063620&flow=esales';
const expectedOmapiQueryResponse = {
  queryurl: HcProductsQueryUrl,
  rawOmapiQuery: {
    products: [
      {
        variants: [
          {
            productId: '2063620',
          },
        ],
      },
    ],
  },
};

const expectedOmapiResponse = {
  // eslint-disable-next-line
  specurl: 'https://api.int.base.be/omapi/public/product/INLN0001',
  rawOmapi: {
    product: {
      productid: 'INLN0001',
    },
  },
};

const omapiQueryResponse = {
  products: [
    {
      variants: [
        {
          productId: '2063620',
        },
      ],
    },
  ],
};

const queryUrl = HcProductsQueryUrl;

const omapiQueryResponses = [
  {
    products: [
      {
        variants: [
          {
            productId: '2063620',
          },
        ],
      },
    ],
  },
] as RawOmapiQueryProductInterface[];
const mockOmapiQueryProductService = {
  rawQueryProductsFromEndpoints$: jest.fn().mockReturnValue(of(omapiQueryResponses)),
};

const badRequestStatusText = 'Bad Request';

describe('OcapiService', () => {
  let ocapiService: OcapiService;
  let configService: ConfigService;
  let messageService: MessageService;
  let urlService: UrlService;
  let backend: HttpTestingController;
  let authenticationState: AuthenticationState;
  // eslint-disable-next-line
  let mockedMapper: MapperInterface<any, any>;
  // eslint-disable-next-line
  let mapper: MapperInterface<any, any>;
  let dataLayerService: DataLayerService;
  const ERROR_DETAIL_CODE = '500 Internal Server Error';
  const TEST_CAUSE = 'test-cause';
  const TEST_CORELATION_ID = 'test-correlationId';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OcapiService,
        { provide: ConfigService, useFactory: () => instance(configService) },
        { provide: UrlService, useFactory: () => instance(urlService) },
        { provide: MessageService, useFactory: () => instance(messageService) },
        { provide: 'Window', useValue: {} },
        { provide: OmapiQueryProductService, useValue: mockOmapiQueryProductService },
        AuthenticationState,
        DataLayerService,
        ErrorReportService,
      ],
      imports: [HttpClientTestingModule],
    });

    configService = mock(ConfigService);
    urlService = mock(UrlService);
    messageService = mock(MessageService);
    ocapiService = TestBed.inject(OcapiService);
    backend = TestBed.inject(HttpTestingController);
    authenticationState = TestBed.inject(AuthenticationState);
    mockedMapper = mock(DummyMapper);
    mapper = instance(mockedMapper);
    when(configService.getConfig(ConfigConstants.OCAPI_URl)).thenReturn('https://api.trg.telenet.be/ocapi');
    // eslint-disable-next-line
    when(urlService.getCurrentUrl()).thenReturn('current-url');
    when(urlService.getParamsValueFromUrl(queryUrl, 'itemcodes')).thenReturn('2063620');
    when(urlService.getRequestParamValue(QueryParamEnum.FLOW, '')).thenReturn('');
    when(urlService.getRequestParamValue(QueryParamEnum.SDATA, '')).thenReturn('');
    when(urlService.getRequestParamValue(QueryParamEnum.SALES_ORDER_ID, '')).thenReturn('');
    dataLayerService = TestBed.inject(DataLayerService);
  });

  describe('doGet', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let ocapiConfig, fakeResponse;
    beforeEach(() => {
      fakeResponse = { response: 'hi' };
      // eslint-disable-next-line
      ocapiConfig = new OcapiCallConfig('message-group', '/url-to-call', mapper);
    });

    it('should call the endpoint and map the response', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      when(mockedMapper.toModel(fakeResponse)).thenReturn('mapped response');

      authenticationState.setAuthenticated(true);

      ocapiConfig = new OcapiCallConfig('message-group', '/url-to-call', mapper);
      ocapiService.doGet(ocapiConfig).subscribe((response) => {
        expect(response.toString()).toBe('mapped response');
      });

      const call = backend.expectOne(TEST_ENDPOINT);
      expect(call.request.url).toBe(TEST_ENDPOINT);
      expect(call.request.headers.get('x-alt-referer')).toBe('current-url');
      expect(call.request.headers.get('X-Requested-With')).toBe('XMLHttpRequest');
      expect(call.request.withCredentials).toBe(true);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      call.flush(fakeResponse);
      backend.verify();
    });

    it('should call the adaptor endpoint and map the response given an adaptor config', (done) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      when(mockedMapper.toModel(fakeResponse)).thenReturn('response');

      const adaptorCallConfig = new OcapiCallConfig(
        'message-group',
        '/public/url-to-call',
        mapper,
        undefined,
        undefined,
        undefined,
        undefined,
        true
      );

      authenticationState.setAuthenticated(true);

      ocapiService.doGet(adaptorCallConfig).subscribe((response) => {
        expect(response.toString()).toBe('response');
        done();
      });

      const call = backend.expectOne('https://api.trg.telenet.be/ocapi-adaptor/public/url-to-call');
      expect(call.request.url).toBe('https://api.trg.telenet.be/ocapi-adaptor/public/url-to-call');

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      call.flush(fakeResponse);
      backend.verify();
    });

    it('should call the endpoint and handle the error given a 500 status', (done) => {
      // eslint-disable-next-line
      const mockErrorResponse = { status: 500, statusText: 'Bad Request' };

      authenticationState.setAuthenticated(true);

      ocapiConfig = new OcapiCallConfig('message-group', '/url-to-call', mapper);
      ocapiService.doGet(ocapiConfig).subscribe({
        // eslint-disable-next-line
        next: () => {},
        // eslint-disable-next-line
        error: () => {
          done();
        },
      });

      const call = backend.expectOne(TEST_ENDPOINT);
      call.flush({}, mockErrorResponse);

      const [errorMessage] = capture(messageService.addMessage).last();
      expect(errorMessage.type).toBe(MessageType.ERROR);
      expect(errorMessage.messageGroupName).toBe('message-group');
      expect(errorMessage.key).toBe('ocapi.500');
      backend.verify();
    });

    it("should call the endpoint and return error cause for 'VM000061' error code", (done) => {
      const mockErrorResponse = {
        status: 422,
        statusText: badRequestStatusText,
      };
      const errorDetails = {
        errorDetailCode: ERROR_DETAIL_CODE,
        message: 'AbandonedSalesOrderNotFoundException',
      };

      authenticationState.setAuthenticated(true);

      ocapiConfig = new OcapiCallConfig('message-group', '/url-to-call', mapper);
      ocapiService.doGet(ocapiConfig).subscribe({
        error: (err: unknown) => {
          expect(err).toBe(
            'An error occured while trying to fetch message-group | ocapi.422-VM000061 | Due to multiple unsuccessful attempts you can not apply coupons for next 4 hours'
          );
          done();
        },
      });

      const call = backend.expectOne(TEST_ENDPOINT);
      call.flush(
        {
          code: 'VM000061',
          cause: 'Due to multiple unsuccessful attempts you can not apply coupons for next 4 hours',
          errorDetails: [errorDetails],
        },
        mockErrorResponse
      );
      backend.verify();

      const [errorMessage] = capture(messageService.addMessage).last();
      expect(errorMessage.type).toBe(MessageType.ERROR);
      expect(errorMessage.messageGroupName).toBe('message-group');
      expect(errorMessage.key).toBe('ocapi.422-VM000061');
    });

    it('should handle error for errorcode "ocapi.422-OCAPI-ERR-ODSO156" by not adding error msg in message service', (done) => {
      const mockErrorResponse = { status: 422, statusText: badRequestStatusText };
      const errorDetails = {
        errorDetailCode: ERROR_DETAIL_CODE,
        message: 'AbandonedSalesOrderNotFoundException',
      };
      authenticationState.setAuthenticated(true);

      spyOn(messageService, 'addMessage');
      ocapiConfig = new OcapiCallConfig('message-group', '/url-to-call', mapper);
      ocapiService.doGet(ocapiConfig).subscribe({
        error: (err: unknown) => {
          expect(err).toBe('An error occured while trying to fetch message-group | ocapi.422-OCAPI-ERR-ODSO156');
          done();
        },
      });
      const call = backend.expectOne(TEST_ENDPOINT);
      call.flush(
        {
          code: 'OCAPI-ERR-ODSO156',
          errorDetails: [errorDetails],
        },
        mockErrorResponse
      );
      backend.verify();
      expect(messageService.addMessage).not.toHaveBeenCalled();
    });

    it('should call the endpoint and handle the error given a 401 status', (done) => {
      const mockErrorResponse = { status: 401, statusText: badRequestStatusText };

      authenticationState.setAuthenticated(true);

      ocapiConfig = new OcapiCallConfig('message-group3', '/url-to-call', mapper);
      ocapiService.doGet(ocapiConfig).subscribe({
        // eslint-disable-next-line
        next: (_resp) => {},
        // eslint-disable-next-line
        error: () => {
          done();
        },
      });

      backend.expectOne(TEST_ENDPOINT).flush({}, mockErrorResponse);

      backend.verify();
      verify(messageService.addMessage(anything())).never();
    });

    // eslint-disable-next-line
    it("should send an ' error occurred ' event to udl in case of error", waitForAsync(() => {
      // eslint-disable-next-line
      const errorDetails = {
        errorDetailCode: ERROR_DETAIL_CODE,
        message: 'AbandonedSalesOrderNotFoundException',
      };
      const error = {
        cause: TEST_CAUSE,
        correlationId: TEST_CORELATION_ID,
        errorDetails: [errorDetails],
      };
      const mockErrorResponse = { status: 403, statusText: badRequestStatusText },
        endpoint = '/url-to-call',
        messageGroup = 'message-group',
        attributes = {
          itemName: messageGroup,
          itemData: 'GET /url-to-call',
          itemGroup: TEST_CAUSE,
          itemIdentifier: TEST_CORELATION_ID,
        };
      spyOn(dataLayerService, 'sendEvent');
      spyOn(dataLayerService, 'createEventInfo').mockReturnValue(new udl.EventInfo());

      authenticationState.setAuthenticated(true);

      ocapiConfig = new OcapiCallConfig(messageGroup, endpoint, mapper);
      ocapiService.doGet(ocapiConfig).subscribe({
        // eslint-disable-next-line
        next: (_resp) => {},
        // eslint-disable-next-line
        error: () => {},
      });

      backend.expectOne(TEST_ENDPOINT).flush(error, mockErrorResponse);

      backend.verify();
      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(
        EventNameEnum.EVENT_NAME_ERROR_OCCURRED,
        EventTypeEnum.EVENT_TYPE_ERROR
      );
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({ eventInfo: expect.any(udl.EventInfo), attributes });
    }));

    it("should not send an 'error occurred' event to udl in case of success GET call", waitForAsync(() => {
      const mockSuccessResponse = { status: 200, statusText: 'success' };
      spyOn(dataLayerService, 'sendEvent');

      authenticationState.setAuthenticated(true);

      ocapiConfig = new OcapiCallConfig('message-group', '/url-to-call', mapper);
      ocapiService.doGet(ocapiConfig).subscribe({
        // eslint-disable-next-line
        next: (_resp) => {},
        // eslint-disable-next-line
        error: () => {},
      });

      backend.expectOne(TEST_ENDPOINT).flush({}, mockSuccessResponse);

      backend.verify();
      expect(dataLayerService.sendEvent).not.toHaveBeenCalled();
    }));

    it("should not send an 'error occurred' event to udl in case of error and flow is marketing", waitForAsync(() => {
      const mockErrorResponse = { status: 403, statusText: badRequestStatusText };
      spyOn(dataLayerService, 'sendEvent');
      authenticationState.setAuthenticated(true);
      when(urlService.getRequestParamValue(QueryParamEnum.FLOW, '')).thenReturn('marketing');
      when(urlService.getRequestParamValue(QueryParamEnum.SALES_ORDER_ID, '')).thenReturn('1234');
      ocapiConfig = new OcapiCallConfig('message-group', '/url-to-call', mapper);
      ocapiService.doGet(ocapiConfig).subscribe({
        next: (_resp) => {
          expect(_resp).toBeDefined();
        },
        error: (err) => {
          expect(err).toBeTruthy();
        },
      });

      backend.expectOne(TEST_ENDPOINT).flush({}, mockErrorResponse);

      backend.verify();
      expect(dataLayerService.sendEvent).not.toHaveBeenCalled();
    }));

    it("should send an 'error occurred' event to udl in case of error and flow is present but sdata and sid is empty", waitForAsync(() => {
      const errorDetails = {
        errorDetailCode: ERROR_DETAIL_CODE,
        message: 'AbandonedSalesOrderNotFoundException',
      };
      const error = {
        cause: TEST_CAUSE,
        correlationId: TEST_CORELATION_ID,
        errorDetails: [errorDetails],
      };
      const mockErrorResponse = { status: 403, statusText: badRequestStatusText },
        messageGroup = 'message-group',
        attributes = {
          itemName: messageGroup,
          itemData: 'GET /url-to-call',
          itemGroup: TEST_CAUSE,
          itemIdentifier: TEST_CORELATION_ID,
        };
      authenticationState.setAuthenticated(true);
      spyOn(dataLayerService, 'sendEvent');
      spyOn(dataLayerService, 'createEventInfo').mockReturnValue(new udl.EventInfo());
      when(urlService.getRequestParamValue(QueryParamEnum.FLOW, '')).thenReturn('care');
      when(urlService.getRequestParamValue(QueryParamEnum.SALES_ORDER_ID, '')).thenReturn('');

      ocapiConfig = new OcapiCallConfig('message-group', '/url-to-call', mapper);
      ocapiService.doGet(ocapiConfig).subscribe({
        next: (_resp) => {
          expect(_resp).toBeDefined();
        },
        error: (err) => {
          expect(err).toBeTruthy();
        },
      });

      backend.expectOne(TEST_ENDPOINT).flush(error, mockErrorResponse);

      backend.verify();
      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(
        EventNameEnum.EVENT_NAME_ERROR_OCCURRED,
        EventTypeEnum.EVENT_TYPE_ERROR
      );
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({ eventInfo: expect.any(udl.EventInfo), attributes });
    }));
  });

  describe('doPost', () => {
    it("should send an ' error occurred ' event to udl in case of error", waitForAsync(() => {
      const errorDetails = {
        errorDetailCode: ERROR_DETAIL_CODE,
        message: 'AbandonedSalesOrderNotFoundException',
      };
      const error = {
        cause: TEST_CAUSE,
        correlationId: TEST_CORELATION_ID,
        errorDetails: [errorDetails],
      };
      const mockErrorResponse = { status: 500, statusText: 'Internal Server Error' },
        endpoint = '/url-to-call',
        messageGroup = 'message-group',
        attributes = {
          itemName: messageGroup,
          itemData: 'POST /url-to-call',
          itemGroup: TEST_CAUSE,
          itemIdentifier: TEST_CORELATION_ID,
        };
      spyOn(dataLayerService, 'sendEvent');
      spyOn(dataLayerService, 'createEventInfo').mockReturnValue(new udl.EventInfo());

      authenticationState.setAuthenticated(true);

      const ocapiConfig = new OcapiCallConfig(messageGroup, endpoint, mapper);
      ocapiService.doPost(ocapiConfig).subscribe({
        // eslint-disable-next-line
        next: (_resp) => {},
        // eslint-disable-next-line
        error: () => {},
      });

      backend.expectOne(TEST_ENDPOINT).flush(error, mockErrorResponse);

      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(
        EventNameEnum.EVENT_NAME_ERROR_OCCURRED,
        EventTypeEnum.EVENT_TYPE_ERROR
      );
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({ eventInfo: expect.any(udl.EventInfo), attributes });
    }));

    it("should not send an 'error occurred' event to udl in case of success POST call", waitForAsync(() => {
      const mockSuccessResponse = { status: 200, statusText: 'success' };
      spyOn(dataLayerService, 'sendEvent');

      const ocapiConfig = new OcapiCallConfig('message-group', '/url-to-call', mapper);
      ocapiService.doPost(ocapiConfig).subscribe({
        // eslint-disable-next-line
        next: (_resp) => {},
        // eslint-disable-next-line
        error: () => {},
      });

      backend.expectOne(TEST_ENDPOINT).flush({}, mockSuccessResponse);
      expect(dataLayerService.sendEvent).not.toHaveBeenCalled();
    }));
  });

  describe('doPut', () => {
    it("should send an ' error occurred ' event to udl in case of error", waitForAsync(() => {
      const errorDetails = {
        errorDetailCode: ERROR_DETAIL_CODE,
        message: 'AbandonedSalesOrderNotFoundException',
      };
      const error = {
        cause: TEST_CAUSE,
        correlationId: TEST_CORELATION_ID,
        errorDetails: [errorDetails],
      };
      const mockErrorResponse = { status: 400, statusText: badRequestStatusText },
        endpoint = '/url-to-call',
        messageGroup = 'message-group',
        attributes = {
          itemName: messageGroup,
          itemData: 'PUT /url-to-call',
          itemGroup: TEST_CAUSE,
          itemIdentifier: TEST_CORELATION_ID,
        };
      spyOn(dataLayerService, 'sendEvent');
      spyOn(dataLayerService, 'createEventInfo').mockReturnValue(new udl.EventInfo());

      const ocapiConfig = new OcapiCallConfig(messageGroup, endpoint, mapper);
      ocapiService.doPut(ocapiConfig).subscribe({
        // eslint-disable-next-line
        next: (_resp) => {},
        // eslint-disable-next-line
        error: () => {},
      });

      backend.expectOne(TEST_ENDPOINT).flush(error, mockErrorResponse);

      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(
        EventNameEnum.EVENT_NAME_ERROR_OCCURRED,
        EventTypeEnum.EVENT_TYPE_ERROR
      );
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({ eventInfo: expect.any(udl.EventInfo), attributes });
    }));

    it("should not send an 'error occurred' event to udl in case of success call", waitForAsync(() => {
      const mockSuccessResponse = { status: 200, statusText: 'success' };
      spyOn(dataLayerService, 'sendEvent');

      const ocapiConfig = new OcapiCallConfig('message-group', '/url-to-call', mapper);
      ocapiService.doPut(ocapiConfig).subscribe({
        // eslint-disable-next-line
        next: (_resp) => {},
        // eslint-disable-next-line
        error: () => {},
      });

      backend.expectOne(TEST_ENDPOINT).flush({}, mockSuccessResponse);
      expect(dataLayerService.sendEvent).not.toHaveBeenCalled();
    }));
  });

  describe('doRestHead', () => {
    it('should call the endpoint and map the response', () => {
      const fakeResponse = { response: 'hi' };
      const ocapiConfig = new OcapiCallConfig('message-group', '/url-to-call', mapper);
      // eslint-disable-next-line
      ocapiService.doRestHead(ocapiConfig).subscribe((_response) => {});

      const call = backend.expectOne(TEST_ENDPOINT);
      expect(call.request.url).toBe(TEST_ENDPOINT);
      expect(call.request.headers.get('x-alt-referer')).toBe('current-url');
      expect(call.request.headers.get('X-Requested-With')).toBe('XMLHttpRequest');
      expect(call.request.withCredentials).toBe(true);

      call.flush(fakeResponse);
    });
  });

  describe('doDelete', () => {
    it("should not send an 'error occurred' event to udl in case of success DELETE call", waitForAsync(() => {
      const mockSuccessResponse = { status: 200, statusText: 'success' };
      spyOn(dataLayerService, 'sendEvent');

      const ocapiConfig = new OcapiCallConfig('message-group', '/url-to-call', mapper);
      ocapiService.doDelete(ocapiConfig).subscribe({
        // eslint-disable-next-line
        next: (_resp) => {},
        // eslint-disable-next-line
        error: () => {},
      });
      backend.expectOne(TEST_ENDPOINT).flush({}, mockSuccessResponse);
      expect(dataLayerService.sendEvent).not.toHaveBeenCalled();
    }));
    it("should send an ' error occurred ' event to udl in case of error", waitForAsync(() => {
      const errorDetails = {
        errorDetailCode: ERROR_DETAIL_CODE,
        message: 'AbandonedSalesOrderNotFoundException',
      };
      const error = {
        cause: TEST_CAUSE,
        correlationId: TEST_CORELATION_ID,
        errorDetails: [errorDetails],
      };
      const mockErrorResponse = { status: 500, statusText: 'Internal Server Error' },
        endpoint = '/url-to-call',
        messageGroup = 'message-group',
        attributes = {
          itemName: messageGroup,
          itemData: 'DELETE /url-to-call',
          itemGroup: TEST_CAUSE,
          itemIdentifier: TEST_CORELATION_ID,
        };
      spyOn(dataLayerService, 'sendEvent');
      spyOn(dataLayerService, 'createEventInfo').mockReturnValue(new udl.EventInfo());

      const ocapiConfig = new OcapiCallConfig(messageGroup, endpoint, mapper);
      ocapiService.doDelete(ocapiConfig).subscribe({
        // eslint-disable-next-line
        next: (_resp) => {},
        // eslint-disable-next-line
        error: () => {},
      });

      backend.expectOne(TEST_ENDPOINT).flush(error, mockErrorResponse);

      expect(dataLayerService.createEventInfo).toHaveBeenCalledWith(
        EventNameEnum.EVENT_NAME_ERROR_OCCURRED,
        EventTypeEnum.EVENT_TYPE_ERROR
      );
      expect(dataLayerService.sendEvent).toHaveBeenCalledWith({ eventInfo: expect.any(udl.EventInfo), attributes });
    }));
  });

  describe('recursiveAddDataToOcapiResponse', () => {
    it('should map the rawOmapi data to ocapi response for specUrl', () => {
      const data = {
        type: null,
        specurl: 'https://api.int.base.be/omapi/public/product/INLN0001',
      };
      const omapiorOmapiQueryResponse = {
        product: {
          productid: 'INLN0001',
        },
      };
      const actualResponse = ocapiService['recursiveAddDataToOcapiResponse'](
        data,
        omapiorOmapiQueryResponse,
        'specurl'
      );
      const expectedResponse = { ...expectedOmapiResponse, type: null };
      expect(actualResponse).toEqual(expectedResponse);
    });
    it('should map the rawOmapiQuery data to ocapi response for queryurl', () => {
      const data = {
        queryurl: HcProductsQueryUrl,
      };
      const actualResponse = ocapiService['recursiveAddDataToOcapiResponse'](data, omapiQueryResponse, 'queryurl');
      expect(actualResponse).toEqual(expectedOmapiQueryResponse);
    });
  });

  describe('ocapiResponseEnrichedWithOmapiQueryData$', () => {
    it('should call the omapiQueryProductService and return the ocapi response with rawOmapiQuery mapping', () => {
      const ocapiResponse = {
        queryurl: HcProductsQueryUrl,
      };
      ocapiService['ocapiResponseEnrichedWithOmapiQueryData$']('message-group', ocapiResponse, false).subscribe(
        (response) => {
          expect(response.queryurl).toEqual(HcProductsQueryUrl);
        }
      );
    });
  });

  describe('recursiveUrls', () => {
    it('should return the array of specUrls for key specurl in ocapi response', () => {
      const data = {
        specurl: 'https://api.int.base.be/omapi/public/product/INLN0001',
        chars: { specUrl: 'testurl' },
      };
      const actualSpecUrls = ocapiService['recursiveUrls'](data, 'specurl');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      expect(actualSpecUrls).toEqual(['https://api.int.base.be/omapi/public/product/INLN0001']);
    });
    it('should return the array of queryUrls for key queryurl in ocapi response', () => {
      const data = {
        queryurl: HcProductsQueryUrl,
      };
      const actualQueryUrls = ocapiService['recursiveUrls'](data, 'queryurl');
      expect(actualQueryUrls).toEqual([
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        HcProductsQueryUrl,
      ]);
    });
  });

  afterEach(() => {
    cleanStylesFromDom();
  });
});
